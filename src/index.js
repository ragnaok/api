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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CompareBikeRequestBody', 'model/CompareQwicBikeResponse', 'model/CompareQwicBikeResponseResult', 'model/CreateBike', 'model/CreateBikeRequestBody', 'model/CreateBikeResponse', 'model/Customer', 'model/CustomerResponseBody', 'model/Firmware', 'model/MessageGatewayResponse', 'model/MessageGatewayResponseResult', 'model/Part', 'model/PartMeta', 'model/PartRequestBody', 'model/PartResponseBody', 'model/PartSpec', 'model/PartSpecResponseBody', 'model/QueryFirmwareResponseBody', 'model/QwicBikeModel', 'model/QwicBikeModelResponse', 'api/BikeApi', 'api/CustomerApi', 'api/FirmwareApi', 'api/MessageGatewayApi', 'api/PartApi', 'api/PartSpecApi', 'api/QwicBikeApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/CompareBikeRequestBody'), require('./model/CompareQwicBikeResponse'), require('./model/CompareQwicBikeResponseResult'), require('./model/CreateBike'), require('./model/CreateBikeRequestBody'), require('./model/CreateBikeResponse'), require('./model/Customer'), require('./model/CustomerResponseBody'), require('./model/Firmware'), require('./model/MessageGatewayResponse'), require('./model/MessageGatewayResponseResult'), require('./model/Part'), require('./model/PartMeta'), require('./model/PartRequestBody'), require('./model/PartResponseBody'), require('./model/PartSpec'), require('./model/PartSpecResponseBody'), require('./model/QueryFirmwareResponseBody'), require('./model/QwicBikeModel'), require('./model/QwicBikeModelResponse'), require('./api/BikeApi'), require('./api/CustomerApi'), require('./api/FirmwareApi'), require('./api/MessageGatewayApi'), require('./api/PartApi'), require('./api/PartSpecApi'), require('./api/QwicBikeApi'));
  }
}(function(ApiClient, CompareBikeRequestBody, CompareQwicBikeResponse, CompareQwicBikeResponseResult, CreateBike, CreateBikeRequestBody, CreateBikeResponse, Customer, CustomerResponseBody, Firmware, MessageGatewayResponse, MessageGatewayResponseResult, Part, PartMeta, PartRequestBody, PartResponseBody, PartSpec, PartSpecResponseBody, QueryFirmwareResponseBody, QwicBikeModel, QwicBikeModelResponse, BikeApi, CustomerApi, FirmwareApi, MessageGatewayApi, PartApi, PartSpecApi, QwicBikeApi) {
  'use strict';

  /**
   * JS API client generated by OpenAPI Generator.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Api = require('index'); // See note below*.
   * var xxxSvc = new Api.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Api.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Api.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Api.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.0.1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The CompareBikeRequestBody model constructor.
     * @property {module:model/CompareBikeRequestBody}
     */
    CompareBikeRequestBody: CompareBikeRequestBody,
    /**
     * The CompareQwicBikeResponse model constructor.
     * @property {module:model/CompareQwicBikeResponse}
     */
    CompareQwicBikeResponse: CompareQwicBikeResponse,
    /**
     * The CompareQwicBikeResponseResult model constructor.
     * @property {module:model/CompareQwicBikeResponseResult}
     */
    CompareQwicBikeResponseResult: CompareQwicBikeResponseResult,
    /**
     * The CreateBike model constructor.
     * @property {module:model/CreateBike}
     */
    CreateBike: CreateBike,
    /**
     * The CreateBikeRequestBody model constructor.
     * @property {module:model/CreateBikeRequestBody}
     */
    CreateBikeRequestBody: CreateBikeRequestBody,
    /**
     * The CreateBikeResponse model constructor.
     * @property {module:model/CreateBikeResponse}
     */
    CreateBikeResponse: CreateBikeResponse,
    /**
     * The Customer model constructor.
     * @property {module:model/Customer}
     */
    Customer: Customer,
    /**
     * The CustomerResponseBody model constructor.
     * @property {module:model/CustomerResponseBody}
     */
    CustomerResponseBody: CustomerResponseBody,
    /**
     * The Firmware model constructor.
     * @property {module:model/Firmware}
     */
    Firmware: Firmware,
    /**
     * The MessageGatewayResponse model constructor.
     * @property {module:model/MessageGatewayResponse}
     */
    MessageGatewayResponse: MessageGatewayResponse,
    /**
     * The MessageGatewayResponseResult model constructor.
     * @property {module:model/MessageGatewayResponseResult}
     */
    MessageGatewayResponseResult: MessageGatewayResponseResult,
    /**
     * The Part model constructor.
     * @property {module:model/Part}
     */
    Part: Part,
    /**
     * The PartMeta model constructor.
     * @property {module:model/PartMeta}
     */
    PartMeta: PartMeta,
    /**
     * The PartRequestBody model constructor.
     * @property {module:model/PartRequestBody}
     */
    PartRequestBody: PartRequestBody,
    /**
     * The PartResponseBody model constructor.
     * @property {module:model/PartResponseBody}
     */
    PartResponseBody: PartResponseBody,
    /**
     * The PartSpec model constructor.
     * @property {module:model/PartSpec}
     */
    PartSpec: PartSpec,
    /**
     * The PartSpecResponseBody model constructor.
     * @property {module:model/PartSpecResponseBody}
     */
    PartSpecResponseBody: PartSpecResponseBody,
    /**
     * The QueryFirmwareResponseBody model constructor.
     * @property {module:model/QueryFirmwareResponseBody}
     */
    QueryFirmwareResponseBody: QueryFirmwareResponseBody,
    /**
     * The QwicBikeModel model constructor.
     * @property {module:model/QwicBikeModel}
     */
    QwicBikeModel: QwicBikeModel,
    /**
     * The QwicBikeModelResponse model constructor.
     * @property {module:model/QwicBikeModelResponse}
     */
    QwicBikeModelResponse: QwicBikeModelResponse,
    /**
     * The BikeApi service constructor.
     * @property {module:api/BikeApi}
     */
    BikeApi: BikeApi,
    /**
     * The CustomerApi service constructor.
     * @property {module:api/CustomerApi}
     */
    CustomerApi: CustomerApi,
    /**
     * The FirmwareApi service constructor.
     * @property {module:api/FirmwareApi}
     */
    FirmwareApi: FirmwareApi,
    /**
     * The MessageGatewayApi service constructor.
     * @property {module:api/MessageGatewayApi}
     */
    MessageGatewayApi: MessageGatewayApi,
    /**
     * The PartApi service constructor.
     * @property {module:api/PartApi}
     */
    PartApi: PartApi,
    /**
     * The PartSpecApi service constructor.
     * @property {module:api/PartSpecApi}
     */
    PartSpecApi: PartSpecApi,
    /**
     * The QwicBikeApi service constructor.
     * @property {module:api/QwicBikeApi}
     */
    QwicBikeApi: QwicBikeApi
  };

  return exports;
}));