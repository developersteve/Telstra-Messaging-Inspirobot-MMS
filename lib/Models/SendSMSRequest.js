/**
 * TelstraMessagingAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of SendSMSRequest
 */
class SendSMSRequest extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.to = this.constructor.getValue(obj.to);
        this.body = this.constructor.getValue(obj.body);
        this.from = this.constructor.getValue(obj.from);
        this.validity = this.constructor.getValue(obj.validity);
        this.scheduledDelivery = this.constructor.getValue(obj.scheduledDelivery);
        this.notifyURL = this.constructor.getValue(obj.notifyURL);
        this.replyRequest = this.constructor.getValue(obj.replyRequest);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'to', realName: 'to' },
            { name: 'body', realName: 'body' },
            { name: 'from', realName: 'from' },
            { name: 'validity', realName: 'validity' },
            { name: 'scheduledDelivery', realName: 'scheduledDelivery' },
            { name: 'notifyURL', realName: 'notifyURL' },
            { name: 'replyRequest', realName: 'replyRequest' },
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

module.exports = SendSMSRequest;
