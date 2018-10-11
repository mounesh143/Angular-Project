var config = require('../config');
var request = require('../utils/request');
var logger = require('../utils/logger');

exports.addressLookup = (req, res, cdrParams) => {
  const address = req.body.free_form_address;
  const transaction_id = req.tid;
  cdrParams.activityCategory = "AddProduct";
  cdrParams.subCategory = "addressLookup";
  cdrParams.component = "addressLookup";
  cdrParams.offerCode = "NA";
  cdrParams.amount = "NA";
  const options = {
    method: 'GET',
    uri:  config.SOA_URL + "mtn-location/address-search/enterprise/proxy/api/v1/address-lookup?number_of_results="
    + config.NO_OF_ADDRESS_LOOKUP + "&free_form_address=" + address + "&transaction_id=" + transaction_id,
    headers: {
      "Authorization": "Basic " + config.REST_AUTH_SOA,
      "Accept": "application/json",
      "Content-Type": "application/json",
      "ENV": "SIT1"
    },
    json: true
  }
  logger.writeLog('debug','Request for Address Lookup '+ options.uri);
  logger.writeLog('debug','Request Address Lookup Headers'+ JSON.stringify(options.headers));
  console.log('Address Lookup Request :', options.uri);
  cdrParams.input = options.uri.substring(options.uri.indexOf("?")+1,options.uri.length);
  request.send(req, res, cdrParams, options);
}

exports.slotAvailability = (req, res, cdrParams) => {
  const latitude = req.body.latitude,
        longitude = req.body.longitude,
        service = req.body.service;
  const transaction_id = req.tid;
  cdrParams.activityCategory = "AddProduct";
  cdrParams.subCategory = "slotAvailability";
  cdrParams.component = "slotAvailability";
  cdrParams.offerCode = "NA";
  cdrParams.amount = "NA";
  const options = {
    method: 'GET',
    uri:  config.SOA_URL + "/mtnslotmanagement/enterprise/proxy/api/v1/slot-availability?transaction_id="
    + transaction_id + "&latitude=" + latitude + "&longitude=" + longitude + "&service=" + service,
    headers: {
      "Authorization": "Basic " + config.REST_AUTH_SOA,
      "Accept": "application/json",
      "Content-Type": "application/json",
      "ENV": "SIT1"
    },
    json: true
  }
  logger.writeLog('debug','Request for Slot Availability '+ options.uri);
  cdrParams.input = options.uri.substring(options.uri.indexOf("?")+1,options.uri.length);
  request.send(req, res, cdrParams, options);
}

exports.reserveSlot = (req, res, cdrParams) => {
  const payload = {
    transaction_id: req.tid,
	source_identifier: req.body.source_identifier,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    prospect_number: req.body.prospect_number,
    msisdn: req.body.msisdn,
    reservation_type: req.body.reservation_type,
    id_type: req.body.id_type,
    id_value: req.body.id_value,
    customer_name: req.body.customer_name,
    customer_address: req.body.customer_address,
    customer_primary_contact_no: req.body.customer_primary_contact_no,
    customer_secondary_contact_no: req.body.customer_secondary_contact_no,
    customer_email_address: req.body.customer_email_address, 
  }
  cdrParams.activityCategory = "AddProduct";
  cdrParams.subCategory = "reserveSlot";
  cdrParams.component = "reserveSlot";
  cdrParams.offerCode = "NA";
  cdrParams.amount = "NA";
  const options = {
    method: 'POST',
    uri:  config.SOA_URL + "mtnslotmanagement/enterprise/proxy/api/v1/slot-reservation",
    headers: {
      "Authorization": "Basic " + config.REST_AUTH_SOA,
      "Accept": "application/json",
      "Content-Type": "application/json",
      "ENV": "SIT1"
    },
    body: payload,
    json: true
  }
  logger.writeLog('debug','Request for Reserve Slot '+ options.uri);
  cdrParams.input = options.uri.substring(options.uri.indexOf("?")+1,options.uri.length);
  logger.writeLog('debug','Request Body for Reserver Slot ' + JSON.stringify(options.body));
  request.send(req, res, cdrParams, options);
}

