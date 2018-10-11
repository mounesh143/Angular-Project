var config = require('../config');
var request = require('../utils/request');
var rp = require('request-promise');
var logger = require('../utils/logger');
var sha256 = require('js-sha256');

exports.getCustomerDetails = (req, res, cdrParams) => {
  var msisdn = req.body.msisdn;
  var subs_type = 1;
  cdrParams.activityCategory = "Customer";
  cdrParams.subCategory = "getCustomerDetails";
  cdrParams.component = "getCustomerDetails";
  cdrParams.offerCode = "NA";
  cdrParams.amount = "NA";
  console.log('MSISDN in CUSTOMER DETAILS :', msisdn);
  if(subs_type == 1){
    var options = {
      method: 'GET',
      uri:  config.PLUGIN_URL_2 + "&category=CustomerDetail&method=tarrifDesc&transID=100&msisdn=" + msisdn + "&subsType=PREPAID&subsID=S1E2B3F48F40",
      json: true
    }
  } else {
    options = {
      method: 'GET',
      uri:  config.PLUGIN_URL_2 + "&category=CustomerDetail&method=tarrifDesc&transID=100&msisdn=" + msisdn + "&subsType=PREPAID&subsID=S1E2B3F48F40",
      json: true
    }
  }
//console.log('Customer Request :', options.uri);
  logger.writeLog('debug','Request for Customer Details ' + options.uri);
  cdrParams.input = options.uri.substring(options.uri.indexOf("?")+1,options.uri.length);
  
  if (req.headers.authorization) {
	  if (req.headers.authorization === sha256(config.AUTH_KEY)) {
		  console.log('Matches');
		  request.send(req, res, cdrParams, options);
	  }
  }
/* rp(options)
  .then(response => {
    console.log('RESPONSE FOR ', JSON.stringify(response));
    return res.status(200).json(response);
  })
  .catch(err => {
    console.log('RESPONSE FOR ', JSON.stringify(err));
    return res.status(502).json({'StatusMessage': 'Bad Request'});
  });
*/
}
