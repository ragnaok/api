/**
 * api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import BikeBundle from './model/BikeBundle';
import CompareBikeRequest from './model/CompareBikeRequest';
import CompareQwicBikeResponse from './model/CompareQwicBikeResponse';
import CompareQwicBikeResponseResult from './model/CompareQwicBikeResponseResult';
import CreateBike from './model/CreateBike';
import CreateBikeRequest from './model/CreateBikeRequest';
import CreateBikeResponse from './model/CreateBikeResponse';
import Customer from './model/Customer';
import CustomerResponse from './model/CustomerResponse';
import Firmware from './model/Firmware';
import FirmwareFile from './model/FirmwareFile';
import GetFirmwareFileResponse from './model/GetFirmwareFileResponse';
import MessageGatewayResponse from './model/MessageGatewayResponse';
import MessageGatewayResponseResult from './model/MessageGatewayResponseResult';
import Part from './model/Part';
import PartMeta from './model/PartMeta';
import PartRequest from './model/PartRequest';
import PartResponse from './model/PartResponse';
import PartSpec from './model/PartSpec';
import PartSpecResponse from './model/PartSpecResponse';
import QueryBikeBundleResponse from './model/QueryBikeBundleResponse';
import QueryFirmwareResponse from './model/QueryFirmwareResponse';
import QwicBikeModel from './model/QwicBikeModel';
import QwicBikeModelResponse from './model/QwicBikeModelResponse';
import BikeApi from './api/BikeApi';
import BikeBundleApi from './api/BikeBundleApi';
import CustomerApi from './api/CustomerApi';
import FirmwareApi from './api/FirmwareApi';
import MessageGatewayApi from './api/MessageGatewayApi';
import PartApi from './api/PartApi';
import PartSpecApi from './api/PartSpecApi';
import QwicBikeApi from './api/QwicBikeApi';


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
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The BikeBundle model constructor.
     * @property {module:model/BikeBundle}
     */
    BikeBundle,

    /**
     * The CompareBikeRequest model constructor.
     * @property {module:model/CompareBikeRequest}
     */
    CompareBikeRequest,

    /**
     * The CompareQwicBikeResponse model constructor.
     * @property {module:model/CompareQwicBikeResponse}
     */
    CompareQwicBikeResponse,

    /**
     * The CompareQwicBikeResponseResult model constructor.
     * @property {module:model/CompareQwicBikeResponseResult}
     */
    CompareQwicBikeResponseResult,

    /**
     * The CreateBike model constructor.
     * @property {module:model/CreateBike}
     */
    CreateBike,

    /**
     * The CreateBikeRequest model constructor.
     * @property {module:model/CreateBikeRequest}
     */
    CreateBikeRequest,

    /**
     * The CreateBikeResponse model constructor.
     * @property {module:model/CreateBikeResponse}
     */
    CreateBikeResponse,

    /**
     * The Customer model constructor.
     * @property {module:model/Customer}
     */
    Customer,

    /**
     * The CustomerResponse model constructor.
     * @property {module:model/CustomerResponse}
     */
    CustomerResponse,

    /**
     * The Firmware model constructor.
     * @property {module:model/Firmware}
     */
    Firmware,

    /**
     * The FirmwareFile model constructor.
     * @property {module:model/FirmwareFile}
     */
    FirmwareFile,

    /**
     * The GetFirmwareFileResponse model constructor.
     * @property {module:model/GetFirmwareFileResponse}
     */
    GetFirmwareFileResponse,

    /**
     * The MessageGatewayResponse model constructor.
     * @property {module:model/MessageGatewayResponse}
     */
    MessageGatewayResponse,

    /**
     * The MessageGatewayResponseResult model constructor.
     * @property {module:model/MessageGatewayResponseResult}
     */
    MessageGatewayResponseResult,

    /**
     * The Part model constructor.
     * @property {module:model/Part}
     */
    Part,

    /**
     * The PartMeta model constructor.
     * @property {module:model/PartMeta}
     */
    PartMeta,

    /**
     * The PartRequest model constructor.
     * @property {module:model/PartRequest}
     */
    PartRequest,

    /**
     * The PartResponse model constructor.
     * @property {module:model/PartResponse}
     */
    PartResponse,

    /**
     * The PartSpec model constructor.
     * @property {module:model/PartSpec}
     */
    PartSpec,

    /**
     * The PartSpecResponse model constructor.
     * @property {module:model/PartSpecResponse}
     */
    PartSpecResponse,

    /**
     * The QueryBikeBundleResponse model constructor.
     * @property {module:model/QueryBikeBundleResponse}
     */
    QueryBikeBundleResponse,

    /**
     * The QueryFirmwareResponse model constructor.
     * @property {module:model/QueryFirmwareResponse}
     */
    QueryFirmwareResponse,

    /**
     * The QwicBikeModel model constructor.
     * @property {module:model/QwicBikeModel}
     */
    QwicBikeModel,

    /**
     * The QwicBikeModelResponse model constructor.
     * @property {module:model/QwicBikeModelResponse}
     */
    QwicBikeModelResponse,

    /**
    * The BikeApi service constructor.
    * @property {module:api/BikeApi}
    */
    BikeApi,

    /**
    * The BikeBundleApi service constructor.
    * @property {module:api/BikeBundleApi}
    */
    BikeBundleApi,

    /**
    * The CustomerApi service constructor.
    * @property {module:api/CustomerApi}
    */
    CustomerApi,

    /**
    * The FirmwareApi service constructor.
    * @property {module:api/FirmwareApi}
    */
    FirmwareApi,

    /**
    * The MessageGatewayApi service constructor.
    * @property {module:api/MessageGatewayApi}
    */
    MessageGatewayApi,

    /**
    * The PartApi service constructor.
    * @property {module:api/PartApi}
    */
    PartApi,

    /**
    * The PartSpecApi service constructor.
    * @property {module:api/PartSpecApi}
    */
    PartSpecApi,

    /**
    * The QwicBikeApi service constructor.
    * @property {module:api/QwicBikeApi}
    */
    QwicBikeApi
};
