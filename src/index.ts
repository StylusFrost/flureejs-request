import {
  ecsign,
  publicToAuthID,
  ecrecover,
  toBuffer,
  sha256,
  defineProperties,
  bufferToInt,
} from 'flureejs-utils'
import { RequestData } from './types'

export default class Request {
  public raw!: Buffer[]
  public param!: Buffer
  public type!: Buffer
  public host!: Buffer
  public db!: Buffer
  public formattedDate!: Buffer
  public auth!: Buffer
  public v!: Buffer
  public r!: Buffer
  public s!: Buffer

  protected _from?: Buffer
  private _senderPubKey?: Buffer

  /**
   * Creates a new request from an object with its fields' values.
   *
   * @param data - A request can be initialized with object containing them by name.
   *
   * @example
   * ```js
   * const RequestData = {
   *   param: '0x0000000000000000000000',
   *   type: '0x09184e72a000',
   *   host: '0x2710',
   *   db: '0x0000000000000000000000000000000000000000',
   *   formattedDate:'0x0000000000000000',
   *   auth: '0x00',
   *   v: '0x1c',
   *   r: '0x5e1d3a76fbf824220eafc8c79ad578ad2b67d01b0c2425eb1f1347e8f50882ab',
   *   s: '0x5bd428537f05f9830e93792f90ea6a3e2d1ee84952dd96edbae9f658f831ab13'
   * };
   * const q = new Request(RequestData);
   * ```
   */

  constructor(data: RequestData = {}) {
    // Define Properties
    const fields = [
      {
        name: 'param',
        allowZero: false,
        default: new Buffer([]),
      },
      {
        name: 'type',
        allowZero: false,
        default: new Buffer([]),
      },
      {
        name: 'host',
        allowZero: false,
        default: new Buffer([]),
      },
      {
        name: 'db',
        allowZero: false,
        default: new Buffer([]),
      },
      {
        name: 'formattedDate',
        allowZero: false,
        default: new Buffer([]),
      },
      {
        name: 'auth',
        allowZero: true,
        default: new Buffer([]),
      },
      {
        name: 'v',
        allowZero: true,
        default: new Buffer([]),
      },
      {
        name: 'r',
        length: 32,
        allowZero: true,
        allowLess: true,
        default: new Buffer([]),
      },
      {
        name: 's',
        length: 32,
        allowZero: true,
        allowLess: true,
        default: new Buffer([]),
      },
    ]

    // attached serialize
    defineProperties(this, fields, data)

    /**
     * @property {Buffer} from (read only) sender address of this transaction, mathematically derived from other parameters.
     * @name from
     * @memberof Transaction
     */
    Object.defineProperty(this, 'from', {
      enumerable: true,
      configurable: true,
      get: this.getSenderAuthID.bind(this),
    })

    this._validateV(this.v)
    this._overrideVSetterWithValidation()
  }

  private _validateV(v?: Buffer): void {
    if (v === undefined || v.length === 0) {
      return
    }

    const vInt = bufferToInt(v)

    if (vInt === 27 || vInt === 28) {
      return
    }
  }

  private _overrideVSetterWithValidation() {
    const vDescriptor = Object.getOwnPropertyDescriptor(this, 'v')!

    Object.defineProperty(this, 'v', {
      ...vDescriptor,
      set: v => {
        if (v !== undefined) {
          this._validateV(toBuffer(v))
        }
        vDescriptor.set!(v)
      },
    })
  }

  /**
   * returns the sender's authID
   */
  getSenderAuthID(): Buffer {
    if (this._from) {
      return this._from
    }
    const pubkey = this.getSenderPublicKey()
    this._from = publicToAuthID(pubkey)
    return this._from
  }

  /**
   * returns the public key of the sender
   */
  getSenderPublicKey(): Buffer {
    if (!this.verifySignature()) {
      throw new Error('Invalid Signature')
    }

    // If the signature was verified successfully the _senderPubKey field is defined
    return this._senderPubKey!
  }

  /**
   * Determines if the signature is valid
   */
  verifySignature(): boolean {
    try {
      const v = bufferToInt(this.v)
      this._senderPubKey = ecrecover(this.msg(), v, this.r, this.s)
    } catch (e) {
      return false
    }
    return !!this._senderPubKey
  }

  signature(): Buffer {
    const newR = this.r[0] & 0x80 ? Buffer.concat([hexToUnit8Array('00'), this.r]) : this.r
    const newS = this.s[0] & 0x80 ? Buffer.concat([hexToUnit8Array('00'), this.s]) : this.s
    const result =
      '02' +
      newR.length.toString(16) +
      newR.toString('hex') +
      '02' +
      newS.length.toString(16) +
      newS.toString('hex')

    const signature = Buffer.from(
      this.v.toString('hex') + '30' + Buffer.from(result, 'hex').length.toString(16) + result,
      'hex',
    )

    const keyID = Buffer.compare(this.auth, Buffer.alloc(0)) != 0 ? this.auth.toString() : 'na'

    return Buffer.from(
      'keyId="' +
        keyID +
        '",headers="(request-target) x-fluree-date digest",algorithm="ecdsa-sha256",signature="' +
        signature.toString('hex') +
        '"',
    )

    function hexToUnit8Array(str: string) {
      return new Uint8Array(Buffer.from(str, 'hex'))
    }
  }

  digest(): Buffer {
    const digest = sha256(Buffer.from(this.param.toString('hex').normalize(), 'hex'))
    return Buffer.from(`SHA-256=${digest.toString('base64')}`)
  }

  private msg(): Buffer {
    const uri = '/fdb/' + this.db.toString() + '/' + this.type.toString()
    return Buffer.from(`(request-target): post ${uri}
    x-fluree-date: ${this.formattedDate.toString()}
    digest: ${this.digest().toString()}`)
  }

  /**
   * Validates the signature and checks to see if it has enough gas.
   */
  validate(): boolean
  validate(stringError: false): boolean
  validate(stringError: true): string
  validate(stringError: boolean = false): boolean | string {
    const errors = []
    if (!this.verifySignature()) {
      errors.push('Invalid Signature')
    }

    if (stringError === false) {
      return errors.length === 0
    } else {
      return errors.join(' ')
    }
  }

  /**
   * sign a request with a given private key
   * @param privateKey
   */

  sign(privateKey: Buffer) {
    const sig = ecsign(this.msg(), privateKey)

    Object.assign(this, sig)
  }
}
