/* tslint:disable no-invalid-this */
import * as assert from 'assert'

import Request from '../src'
import { RequestsJsonEntry } from './types'

import { zeros, privateToPublic, toBuffer } from 'flureejs-utils'

const requestFixtures: RequestsJsonEntry[] = require('./requests.json')

describe('[Request]: Basic functions', function() {
  const requests: Request[] = []
  it('should decode requests', function() {
    requestFixtures.slice(0, 3).forEach(function(request: any) {
      const pQ = new Request(request.raw)
      assert.equal('0x' + pQ.param.toString('hex'), request.raw[0])
      assert.equal('0x' + pQ.type.toString('hex'), request.raw[1])
      assert.equal('0x' + pQ.host.toString('hex'), request.raw[2])
      assert.equal('0x' + pQ.db.toString('hex'), request.raw[3])
      assert.equal('0x' + pQ.formattedDate.toString('hex'), request.raw[4])
      assert.equal('0x' + pQ.v.toString('hex'), request.raw[6])
      assert.equal('0x' + pQ.r.toString('hex'), request.raw[7])
      assert.equal('0x' + pQ.s.toString('hex'), request.raw[8])
      requests.push(pQ)
    })
  })

  it('should verify Signatures', function() {
    requests.forEach(function(request) {
      assert.equal(request.verifySignature(), true)
    })
  })

  it('should not verify Signatures', function() {
    requests.forEach(function(request) {
      request.s = zeros(32)
      assert.equal(request.verifySignature(), false)
    })
  })

  it('should give a string about not verifing Signatures', function() {
    requests.forEach(function(request) {
      assert.equal(request.validate(true).slice(0, 17), 'Invalid Signature')
    })
  })

  it('should validate', function() {
    requests.forEach(function(request) {
      assert.equal(request.validate(), false)
    })
  })

  it('should sign request', function() {
    requests.forEach(function(request, i) {
      if (requestFixtures[i].privateKey) {
        const privKey = new Buffer(requestFixtures[i].privateKey, 'hex')
        request.sign(privKey)
      }
    })
  })
  it("should get sender's AuthID after signing it", function() {
    requests.forEach(function(request, i) {
      if (requestFixtures[i].privateKey) {
        assert.equal(request.getSenderAuthID(), requestFixtures[i].sendersAuthID)
      }
    })
  })

  it("should get sender's public key after signing it", function() {
    requests.forEach(function(request, i) {
      if (requestFixtures[i].privateKey) {
        assert.equal(
          request.getSenderPublicKey().toString('hex'),
          privateToPublic(new Buffer(requestFixtures[i].privateKey, 'hex')).toString('hex'),
        )
      }
    })
  })

  it("should get sender's authID after signing it (second call should be cached)", function() {
    requests.forEach(function(request, i) {
      if (requestFixtures[i].privateKey) {
        assert.equal(request.getSenderAuthID(), requestFixtures[i].sendersAuthID)
        assert.equal(request.getSenderAuthID(), requestFixtures[i].sendersAuthID)
      }
    })
  })

  it('should verify signing it', function() {
    requests.forEach(function(request, i) {
      if (requestFixtures[i].privateKey) {
        assert.equal(request.verifySignature(), true)
      }
    })
  })

  it('should accept lesser r values', function() {
    const request = new Request()
    request.r = toBuffer('0x0005')
    assert.equal(request.r.toString('hex'), '05')
  })
})
