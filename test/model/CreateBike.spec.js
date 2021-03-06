/**
 * api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Api);
  }
}(this, function(expect, Api) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Api.CreateBike();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CreateBike', function() {
    it('should create an instance of CreateBike', function() {
      // uncomment below and update the code to test CreateBike
      //var instance = new Api.CreateBike();
      //expect(instance).to.be.a(Api.CreateBike);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Api.CreateBike();
      //expect(instance).to.be();
    });

    it('should have the property specId (base name: "spec_id")', function() {
      // uncomment below and update the code to test the property specId
      //var instance = new Api.CreateBike();
      //expect(instance).to.be();
    });

    it('should have the property vin (base name: "vin")', function() {
      // uncomment below and update the code to test the property vin
      //var instance = new Api.CreateBike();
      //expect(instance).to.be();
    });

    it('should have the property meta (base name: "meta")', function() {
      // uncomment below and update the code to test the property meta
      //var instance = new Api.CreateBike();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new Api.CreateBike();
      //expect(instance).to.be();
    });

    it('should have the property invalidedAt (base name: "invalided_at")', function() {
      // uncomment below and update the code to test the property invalidedAt
      //var instance = new Api.CreateBike();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new Api.CreateBike();
      //expect(instance).to.be();
    });

  });

}));
