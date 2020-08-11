/**
 * Finn Tone API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Tone model module.
 * @module model/Tone
 * @version 1.0.0
 */
class Tone {
    /**
     * Constructs a new <code>Tone</code>.
     * @alias module:model/Tone
     * @param tone {module:model/Tone.ToneEnum} 
     */
    constructor(tone) { 
        
        Tone.initialize(this, tone);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tone) { 
        obj['tone'] = tone;
    }

    /**
     * Constructs a <code>Tone</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Tone} obj Optional instance to populate.
     * @return {module:model/Tone} The populated <code>Tone</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Tone();

            if (data.hasOwnProperty('tone')) {
                obj['tone'] = ApiClient.convertToType(data['tone'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Tone.ToneEnum} tone
 */
Tone.prototype['tone'] = undefined;





/**
 * Allowed values for the <code>tone</code> property.
 * @enum {String}
 * @readonly
 */
Tone['ToneEnum'] = {

    /**
     * value: "humorous"
     * @const
     */
    "humorous": "humorous",

    /**
     * value: "ironic"
     * @const
     */
    "ironic": "ironic",

    /**
     * value: "cynical"
     * @const
     */
    "cynical": "cynical"
};



export default Tone;
