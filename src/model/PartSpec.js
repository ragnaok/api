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

import ApiClient from '../ApiClient';

/**
 * The PartSpec model module.
 * @module model/PartSpec
 * @version 0.0.1
 */
class PartSpec {
    /**
     * Constructs a new <code>PartSpec</code>.
     * @alias module:model/PartSpec
     */
    constructor() { 
        
        PartSpec.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PartSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PartSpec} obj Optional instance to populate.
     * @return {module:model/PartSpec} The populated <code>PartSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PartSpec();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('project_code')) {
                obj['project_code'] = ApiClient.convertToType(data['project_code'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('supplier_id')) {
                obj['supplier_id'] = ApiClient.convertToType(data['supplier_id'], 'String');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('fw_ver')) {
                obj['fw_ver'] = ApiClient.convertToType(data['fw_ver'], 'String');
            }
            if (data.hasOwnProperty('hw_ver')) {
                obj['hw_ver'] = ApiClient.convertToType(data['hw_ver'], 'String');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], {'String': 'String'});
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
PartSpec.prototype['id'] = undefined;

/**
 * @member {String} name
 */
PartSpec.prototype['name'] = undefined;

/**
 * @member {String} project_code
 */
PartSpec.prototype['project_code'] = undefined;

/**
 * @member {String} type
 */
PartSpec.prototype['type'] = undefined;

/**
 * @member {String} supplier_id
 */
PartSpec.prototype['supplier_id'] = undefined;

/**
 * @member {String} customer_id
 */
PartSpec.prototype['customer_id'] = undefined;

/**
 * @member {String} fw_ver
 */
PartSpec.prototype['fw_ver'] = undefined;

/**
 * @member {String} hw_ver
 */
PartSpec.prototype['hw_ver'] = undefined;

/**
 * @member {Object.<String, String>} meta
 */
PartSpec.prototype['meta'] = undefined;

/**
 * @member {String} created_at
 */
PartSpec.prototype['created_at'] = undefined;

/**
 * @member {String} updated_at
 */
PartSpec.prototype['updated_at'] = undefined;






export default PartSpec;

