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
    define(['ApiClient', 'model/CreateBikeRequestBody', 'model/CreateBikeResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateBikeRequestBody'), require('../model/CreateBikeResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Api) {
      root.Api = {};
    }
    root.Api.BikeApi = factory(root.Api.ApiClient, root.Api.CreateBikeRequestBody, root.Api.CreateBikeResponse);
  }
}(this, function(ApiClient, CreateBikeRequestBody, CreateBikeResponse) {
  'use strict';

  /**
   * Bike service.
   * @module api/BikeApi
   * @version 0.0.1
   */

  /**
   * Constructs a new BikeApi. 
   * @alias module:api/BikeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createBike operation.
     * @callback module:api/BikeApi~createBikeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateBikeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a bike
     * @param {String} version api version
     * @param {module:model/CreateBikeRequestBody} body create bike body parameters
     * @param {module:api/BikeApi~createBikeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateBikeResponse}
     */
    this.createBike = function(version, body, callback) {
      var postBody = body;
      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling createBike");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createBike");
      }

      var pathParams = {
        'version': version
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = [];
      var accepts = ['*/*', 'application/json'];
      var returnType = CreateBikeResponse;
      return this.apiClient.callApi(
        '/{version}/bike', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));