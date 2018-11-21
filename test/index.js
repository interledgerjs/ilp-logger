Object.defineProperty(exports, "__esModule", { value: true });
const createLogger = require("../src");
const mocha = require('mocha')
const sinon = require('sinon')
const Chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
Chai.use(chaiAsPromised)
const assert = Object.assign(Chai.assert, sinon.assert)
require('source-map-support').install()

describe('ilp-logger', function () {

  describe('createLogger', function () {
    it('should return an instance of a Logger', function () {
      const log = createLogger('TEST')
      assert(typeof(log.info) === 'function')
      assert(typeof(log.warn) === 'function')
      assert(typeof(log.error) === 'function')
      assert(typeof(log.debug) === 'function')
      assert(typeof(log.trace) === 'function')
    })

    it('should append :info to namespace for log.info', function () {
      const log = createLogger('TEST')
      log.info.log = (text) => {
        assert(text.startsWith('TEST:info'))
      }
      log.info('lorum')
    })

    it('should append :warn to namespace for log.warn', function () {
      const log = createLogger('TEST')
      log.warn.log = (text) => {
        assert(text.startsWith('TEST:warn'))
      }
      log.warn('lorum')
    })

    it('should append :error to namespace for log.error', function () {
      const log = createLogger('TEST')
      log.error.log = (text) => {
        assert(text.startsWith('TEST:error'))
      }
      log.error('lorum')
    })

    it('should append :debug to namespace for log.debug', function () {
      const log = createLogger('TEST')
      log.debug.log = (text) => {
        assert(text.startsWith('TEST:debug'))
      }
      log.debug('lorum')
    })

    it('should append :trace to namespace for log.trace', function () {
      const log = createLogger('TEST')
      log.trace.log = (text) => {
        assert(text.startsWith('TEST:trace'))
      }
      log.trace('lorum')
    })
  })
})
