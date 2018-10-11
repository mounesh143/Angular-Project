var rp = require('request-promise');
var logger = require('./logger');
var cdr = require('./cdr');
exports.send = (req, res, cdrParams, options) => {
  console.log('In Request Function');
	cdrParams.originIP = req.headers.origin;
  rp(options)
  .then(response => {
    console.log('RESPONSE FOR ', JSON.stringify(response));
    logger.writeLog('debug','RESPONSE FOR ' + JSON.stringify(response));
    req.endtime = Date.now();
	logger.writeActionCDR(req);
	cdrParams.output = response;
	cdrParams.statusMessage = "Success";
	cdrParams.statusCode = "200";
	cdr.writeMiddlewareCDR(req, cdrParams);
    return res.status(200).json(response);
  })
  .catch(err => {
    console.log('RESPONSE FOR ', JSON.stringify(err));
    logger.writeLog('debug','RESPONSE FOR ' + JSON.stringify(err));
    req.endtime = Date.now();
	logger.writeActionCDR(req);
	cdrParams.output = err;
	cdrParams.statusMessage = "Failure";
	cdrParams.statusCode = "502";
	cdr.writeMiddlewareCDR(req, cdrParams);
    return res.status(502).json({'StatusMessage': 'Bad Request'});
  });
}
