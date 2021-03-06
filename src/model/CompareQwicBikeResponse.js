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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CompareQwicBikeResponseResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CompareQwicBikeResponseResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Api) {
      root.Api = {};
    }
    root.Api.CompareQwicBikeResponse = factory(root.Api.ApiClient, root.Api.CompareQwicBikeResponseResult);
  }
}(this, function(ApiClient, CompareQwicBikeResponseResult) {
  'use strict';



  /**
   * The CompareQwicBikeResponse model module.
   * @module model/CompareQwicBikeResponse
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>CompareQwicBikeResponse</code>.
   * @alias module:model/CompareQwicBikeResponse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CompareQwicBikeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompareQwicBikeResponse} obj Optional instance to populate.
   * @return {module:model/CompareQwicBikeResponse} The populated <code>CompareQwicBikeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('result')) {
        obj['result'] = CompareQwicBikeResponseResult.constructFromObject(data['result']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CompareQwicBikeResponseResult} result
   */
  exports.prototype['result'] = undefined;



  return exports;
}));


