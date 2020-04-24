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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Api) {
      root.Api = {};
    }
    root.Api.PartMeta = factory(root.Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PartMeta model module.
   * @module model/PartMeta
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PartMeta</code>.
   * @alias module:model/PartMeta
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PartMeta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartMeta} obj Optional instance to populate.
   * @return {module:model/PartMeta} The populated <code>PartMeta</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('mid')) {
        obj['mid'] = ApiClient.convertToType(data['mid'], 'String');
      }
      if (data.hasOwnProperty('part_num')) {
        obj['part_num'] = ApiClient.convertToType(data['part_num'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} mid
   */
  exports.prototype['mid'] = undefined;
  /**
   * @member {String} part_num
   */
  exports.prototype['part_num'] = undefined;



  return exports;
}));

