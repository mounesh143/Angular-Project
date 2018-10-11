var config = require('../config');
var request = require('../utils/request');
var logger = require('../utils/logger');
var cdr = require('../utils/cdr');
var sha256 = require('js-sha256');

exports.getBalance = (req, res, cdrParams) => {
  var msisdn = req.body.msisdn;
  var subs_type = req.body.sub_type;
  logger.writeLog('Get Balance MSISDN ' + msisdn);
	console.log("req.body.sub_type---" + req.body.sub_type);
  req.msisdn = msisdn;
  cdrParams.activityCategory = "Balance";
  cdrParams.subCategory = "getBalance";
  cdrParams.component = "getBalance";
  cdrParams.offerCode = "NA";
  cdrParams.amount = "NA";
  // req.transStartTime = '16/05/2018';
  // req.apiStatus = '200';
  // req.transEndTime = '16.1/05/2018';
  if(subs_type != 'Contract'){ 
    var options = {
      method: 'GET',
      uri:  config.PLUGIN_URL + "&subsType=PREPAID&transID=100&MSISDN=" + msisdn + "&subsID=S1E2B3F48F40&balType=1",
      json: true
    }
  } else {
    options = {
      method: 'GET',
      uri:  config.PLUGIN_URL_2 + "&subsType=PREPAID&transID=100&MSISDN=" + msisdn + "&category=myaccount&method=postpaidquery",
      json: true
    }
  }
  logger.writeLog('debug','Request for Balance '+ options.uri);
  cdrParams.input = options.uri.substring(options.uri.indexOf("?")+1,options.uri.length);
  console.log("Request for Balance" + options.uri);
  
  if (req.headers.authorization) {
	  if (req.headers.authorization === sha256(config.AUTH_KEY)) {
		  console.log('Matches');
		  request.send(req, res, cdrParams, options);
	  }
  }
}
