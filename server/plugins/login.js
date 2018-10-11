var config = require('../config');
var request = require('../utils/request');
var logger = require('../utils/logger');
var cdr = require('../utils/cdr');
var sha256 = require('js-sha256');

exports.getLoginDetails = (req, res, cdrParams) => {
  var msisdn = req.body.msisdn;
  cdrParams.activityCategory = "Login";
  cdrParams.subCategory = "getLoginDetails";
  cdrParams.component = "getLoginDetails";
  cdrParams.offerCode = "NA";
  cdrParams.amount = "NA";
  options = {
    method: 'GET',
    uri:  config.PLUGIN_URL + "&subsType=PREPAID&transID=100&MSISDN=" + msisdn + "&subsID=S1E2B3F48F40&balType=1",
    json: true
  }
  logger.writeLog('debug','Request for Login '+ options.uri);
  cdrParams.input = options.uri.substring(options.uri.indexOf("?")+1,options.uri.length);
  
  if (req.headers.authorization) {
	  if (req.headers.authorization === sha256(config.AUTH_KEY)) {
		  console.log('Matches');
		  request.send(req, res, cdrParams, options);
	  }
  }
}
