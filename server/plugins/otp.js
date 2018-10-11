var config = require('../config');
var request = require('../utils/request');
var sha256 = require('js-sha256');

exports.generateOTP = function(req, res, cdrParams) {
  const msisdn = req.body.msisdn;
  const subID = '2342335';
  cdrParams.activityCategory = "OTP";
  cdrParams.subCategory = "generateOTP";
  cdrParams.component = "generateOTP";
  cdrParams.offerCode = "NA";
  cdrParams.amount = "NA";
  const options = {
    method: 'GET',
    uri:  config.PLUGIN_URL_2 + "&subsID=" + subID + "&subsType=PREPAID&transID=124&category=OTP&method=generation&msisdn=" + msisdn,
    json: true
  }
  console.log(' Request for OTP Generation :', options.uri);
  cdrParams.input = options.uri.substring(options.uri.indexOf("?")+1,options.uri.length);
  if (req.headers.authorization) {
	  if (req.headers.authorization === sha256(config.AUTH_KEY)) {
		  console.log('Matches');
		  request.send(req, res, cdrParams, options);
	  }
  }
}

exports.validateOTP = function(req, res, cdrParams){
  const msisdn = req.body.msisdn;
  const otp = req.body.otp;
  console.log('OTP in request : ', otp);
  const subID = '23423423';
  cdrParams.activityCategory = "OTP";
  cdrParams.subCategory = "validateOTP";
  cdrParams.component = "validateOTP";
  cdrParams.offerCode = "NA";
  cdrParams.amount = "NA";
  const options = {
    method: 'GET',
    uri:  config.PLUGIN_URL_2 + "&subsID=" + subID + "&subsType=PREPAID&transID=124&category=OTP&method=validation&msisdn=" + msisdn + "&OTP=" + otp,
    json: true
  }
  console.log(' Request for OTP Validation :', options.uri);
  cdrParams.input = options.uri.substring(options.uri.indexOf("?")+1,options.uri.length);
  if (req.headers.authorization) {
	  if (req.headers.authorization === sha256(config.AUTH_KEY)) {
		  console.log('Matches');
		  request.send(req, res, cdrParams, options);
	  }
  }
}

