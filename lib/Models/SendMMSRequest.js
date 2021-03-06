/**
 * TelstraMessagingAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of SendMMSRequest
 */
class SendMMSRequest extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.from = this.constructor.getValue(obj.from);
        this.to = this.constructor.getValue(obj.to);
        this.subject = this.constructor.getValue(obj.subject);
        this.replyRequest = this.constructor.getValue(obj.replyRequest);
        this.mMSContent = this.constructor.getValue(obj.mMSContent || obj.MMSContent);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'from', realName: 'from' },
            { name: 'to', realName: 'to' },
            { name: 'subject', realName: 'subject' },
            { name: 'replyRequest', realName: 'replyRequest' },
            { name: 'mMSContent', realName: 'MMSContent', array: true, type: 'MMSContent' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = SendMMSRequest;
