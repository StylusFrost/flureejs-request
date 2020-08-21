/**
 * Any object that can be transformed into a `Buffer`
 */
export interface TransformableToBuffer {
  toBuffer(): Buffer
}

/**
 * A hex string prefixed with `0x`.
 */
export type PrefixedHexString = string

/**
 * A Buffer, hex string prefixed with `0x`, Number, or an object with a toBuffer method such as BN.
 */
export type BufferLike = Buffer | TransformableToBuffer | PrefixedHexString | number

export interface RequestData {
  /**
   * This will contain the data of the request
   */
  param?: BufferLike

  /**
   * The request's type.
   */
  type?: BufferLike

  /**
   * The request's host to.
   */
  host?: BufferLike

  /**
   * The request's db to.
   */
  db?: BufferLike

  /**
   * The request's date.
   */
  formattedDate?: BufferLike

  /**
   * If an authority is signing
   */
  auth?: BufferLike

  /**
   * EC recovery ID.
   */
  v?: BufferLike

  /**
   * EC signature parameter.
   */
  r?: BufferLike

  /**
   * EC signature parameter.
   */
  s?: BufferLike
}
