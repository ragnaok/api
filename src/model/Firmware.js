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
 * The Firmware model module.
 * @module model/Firmware
 * @version 0.0.1
 */
class Firmware {
    /**
     * Constructs a new <code>Firmware</code>.
     * @alias module:model/Firmware
     */
    constructor() { 
        
        Firmware.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Firmware</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Firmware} obj Optional instance to populate.
     * @return {module:model/Firmware} The populated <code>Firmware</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Firmware();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('part_num')) {
                obj['part_num'] = ApiClient.convertToType(data['part_num'], 'String');
            }
            if (data.hasOwnProperty('hw_ver')) {
                obj['hw_ver'] = ApiClient.convertToType(data['hw_ver'], 'String');
            }
            if (data.hasOwnProperty('fw_kernel_ver')) {
                obj['fw_kernel_ver'] = ApiClient.convertToType(data['fw_kernel_ver'], 'String');
            }
            if (data.hasOwnProperty('fw_ver')) {
                obj['fw_ver'] = ApiClient.convertToType(data['fw_ver'], 'String');
            }
            if (data.hasOwnProperty('release_note')) {
                obj['release_note'] = ApiClient.convertToType(data['release_note'], 'String');
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], [{'String': 'String'}]);
            }
            if (data.hasOwnProperty('releases')) {
                obj['releases'] = ApiClient.convertToType(data['releases'], [{'String': 'String'}]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Firmware.prototype['id'] = undefined;

/**
 * @member {String} part_num
 */
Firmware.prototype['part_num'] = undefined;

/**
 * @member {String} hw_ver
 */
Firmware.prototype['hw_ver'] = undefined;

/**
 * @member {String} fw_kernel_ver
 */
Firmware.prototype['fw_kernel_ver'] = undefined;

/**
 * @member {String} fw_ver
 */
Firmware.prototype['fw_ver'] = undefined;

/**
 * @member {String} release_note
 */
Firmware.prototype['release_note'] = undefined;

/**
 * @member {Array.<Object.<String, String>>} files
 */
Firmware.prototype['files'] = undefined;

/**
 * @member {Array.<Object.<String, String>>} releases
 */
Firmware.prototype['releases'] = undefined;






export default Firmware;

