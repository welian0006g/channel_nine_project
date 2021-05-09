/* eslint-env node, mocha */
const chai = require('chai')
const expect = chai.expect
const payloadsProcess = require('../lib/payloads_process')
const _ = require('lodash')

/* This is the unit test to test payloads_process function works as expected */
describe('Payloads', function () {
  let payloads
  beforeEach(function () {
    payloads = [{ drm: false, image: { showImage: 'test_image01' }, slug: 'test_slug01', title: 'test_title01' },
      { drm: true, image: { showImage: 'test_image02' }, slug: 'test_slug02', title: 'test_title02' },
      { image: { showImage: 'test_image03' }, slug: 'test_slug03', title: 'test_title03' },
      { drm: true, image: { showImage: 'test_image04' }, slug: 'test_slug04', title: 'test_title04', episodeCount: 0 },
      { drm: true, image: { showImage: 'test_image05' }, slug: 'test_slug05', title: 'test_title05', episodeCount: 3 }]
  })
  it('should return payloads with limited fields when episode count greater than 0 and drm field is true after filtering', function () {
    expect(_.isEqual(payloadsProcess(payloads), [{ image: 'test_image05', slug: 'test_slug05', title: 'test_title05' }])).to.equal(true)
  })
})
