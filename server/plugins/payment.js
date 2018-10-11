var rp = require('request-promise');
var config = require('../config');
var mydb = require('../utils/mydb');
var request = require('request');
var http = require('../utils/http');

/* Get soa_transaction_id from SOA Start*/

var getSOATransactionId = function (req,res,cdrParams) {
  console.log('Payment Flow - Step 1 - IN');
  const payload = {
      transaction_id: '232123213123',
      system_id: config.SOA_SYSTEM_ID,
      function_id: config.SOA_FUNCTION_ID
  }
  options = {
    method: 'POST',
    uri:  config.SOA_URL + "GenerateSOATransactionIdService/GenerateSOATransId/getSOATransactionID",
    json: true,
    headers: {
      "Authorization": "Basic " + config.REST_AUTH_SOA1,
      "Accept": "application/json",
      "Content-Type": "application/json",
      "ENV": "SIT1"
    },
    body: payload
  }
  console.log('Request Body', options.body);
  var result = request(options, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      console.log('Payment Flow - Step 1 - Suceess Response  -', JSON.stringify(body));
      startPaymentFlow(2, req, res, cdrParams);
    } else {
      console.log('Payment Flow - Step 1 - Failure Response  -', JSON.stringify(body));
      
    }
  });
  console.log('Payment Flow - Step 1 - OUT');
}

/* Get soa_transaction_id from SOA End */

/* Insert a record in the open table */
var openPayment = function(req, cdrParams) {
  console.log('Payment Flow - Step 2 - IN');
    var payload = {
      REFERENCE: req.body.msisdn,
      MSISDN: req.body.msisdn,
      AMOUNT: req.body.amount,
      TRANSACTION_DATE: ' ' + new Date().getFullYear + ' ' + (new Date().getMonth()+1) + ' '+ new Date().getDate(),
      TRANSACTIONID : new Date(),
      EMAIL : req.body.email,
      TRANSACTIONTIME: new Date().toISOString(),
      PAY_REQUEST_ID : '',
      STATUS: 'INITIAL',
      APP_NAME: 'RECHARGES',
      SUB_TYPE: 'SUB_TYPE',
      SUBSCRIBER_ID: 'SUBS_ID',
      APP_GROUP: 'APP_GROUP',
      TRANSACTION_TYPE: 'TRANS_TYPE',
      BUNDLE_ID: req.body.bundleID
    }
    console.log('Payment Flow - Step 2 - Request', req.body);
    var result = mydb.insertOne("sampledb", "payment_open", payload);
    console.log('Payment Flow - Step 2 - Response', JSON.stringify(result));
    startPaymentFlow(3, req, cdrParams);
    console.log('Payment Flow - Step 2 - OUT');

}
/* Insert a record in the open table */

/* Hit Paygate API */
var getPayGatewayRequestId = function(req, res, cdrParams) {
  var payload = 
    {
      "transaction_id": "1312312312",
      "paygate_id": 123456,
      "reference": "0832227009",
      "amount": 100,
      "currency": "ZAR",
      "return_url": "http://localhost:4200/app/pagenotfound",
      "transaction_date": "2018-08-21 04:45:30",
      "locale": "en-za",
      "country": "ZAF",
      "email": "abccdef@mtn.com",
      "pay_method": "string",
      "pay_method_detail": "string",
      "notify_url": "http://localhost:4200/app/pagenotfound",
      "user1": req.body.soa_transaction_id,
      "user2": "string",
      "vault": 0,
      "vault_id": "string",
      "checksum": "2342342343"
  }
  const options = {
    method: 'POST',
    uri:  config.SOA_URL + "GetPaygateTransaction_ID/GetPaygateTransactionID/Query",
    headers: {
      "Authorization": "Basic " + config.REST_AUTH_SOA1,
      "Accept": "application/json",
      "Content-Type": "application/json",
      "ENV": "SIT1"
    },
    body: payload,
    json: true
  }
  var result = request(options, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      console.log('Success' + body);
    } else {
      console.log('Error' + JSON.stringify(response.body));
      startPaymentFlow(4, req, res, cdrParams);
    }
  });
}
/* Hit Paygate API */

var startPaymentFlow = function startPaymentFlow(step, req, res, cdrParams) {
  if(step == 1) {
      console.log('Payment Flow - Step 1 Start');
      var result = getSOATransactionId(req, res, cdrParams, function(res){
        console.log('Hello World');
      });
      console.log('Payment Flow - Step 1 End');
  }  else if(step == 2) {
      console.log('Payment Flow - Step 2 Start');
      openPayment(req, res, cdrParams);
      console.log('Payment Flow - Step 2 End');
  } else if(step == 3) {
      console.log('Payment Flow - Step 3 Start');
      getPayGatewayRequestId(req, res, cdrParams);
      console.log('Payment Flow - Step 3 End');
  } else if(step == 4) {
      console.log('Payment Flow - Step 4 Start');
      console.log('Payment Flow - Step 4 End');
      res.status(200).json({'statusMessage': 'Success', 'statusCode': '0'});
  }
}

var printIt = function printIt(req){
  console.log('I\'m Printed Perfectly');
}
module.exports = {
  startPaymentFlow: startPaymentFlow,
  getSOATransactionId : getSOATransactionId,
  openPayment : openPayment,
  getPayGatewayRequestId : getPayGatewayRequestId,
  printIt: printIt
}
