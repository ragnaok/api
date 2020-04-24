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
    define(['ApiClient', 'model/PartMeta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PartMeta'));
  } else {
    // Browser globals (root is window)
    if (!root.Api) {
      root.Api = {};
    }
    root.Api.CreateBikeRequestBody = factory(root.Api.ApiClient, root.Api.PartMeta);
  }
}(this, function(ApiClient, PartMeta) {
  'use strict';



  /**
   * The CreateBikeRequestBody model module.
   * @module model/CreateBikeRequestBody
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>CreateBikeRequestBody</code>.
   * @alias module:model/CreateBikeRequestBody
   * @class
   * @param vin {String} 
   * @param specId {Number} 
   * @param parts {Array.<module:model/PartMeta>} 
   */
  var exports = function(vin, specId, parts) {
    var _this = this;

    _this['vin'] = vin;
    _this['spec_id'] = specId;
    _this['parts'] = parts;
  };

  /**
   * Constructs a <code>CreateBikeRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateBikeRequestBody} obj Optional instance to populate.
   * @return {module:model/CreateBikeRequestBody} The populated <code>CreateBikeRequestBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('vin')) {
        obj['vin'] = ApiClient.convertToType(data['vin'], 'String');
      }
      if (data.hasOwnProperty('spec_id')) {
        obj['spec_id'] = ApiClient.convertToType(data['spec_id'], 'Number');
      }
      if (data.hasOwnProperty('parts')) {
        obj['parts'] = ApiClient.convertToType(data['parts'], [PartMeta]);
      }
    }
    return obj;
  }

  /**
   * @member {String} vin
   */
  exports.prototype['vin'] = undefined;
  /**
   * @member {Number} spec_id
   */
  exports.prototype['spec_id'] = undefined;
  /**
   * @member {Array.<module:model/PartMeta>} parts
   */
  exports.prototype['parts'] = undefined;



  return exports;
}));

