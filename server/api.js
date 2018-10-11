var express = require('express');
var router = express.Router();
var logger = require('./utils/logger');
var cdr = require('./utils/cdr');
var dateFormats = require('./utils/dateformats');
// var sha256 = require('js-sha256');
var config = require('./config');
var payment = require('./plugins/payment');

router.get('/', function(req, res, next) {
    res.send("App Middleware");
});
router.post('/angularCDR',angularCDR);
router.post('/payment',getPayment);

var aCDRParams = {};
aCDRParams.transStartTime = dateFormats.ddMMyyyyhhmmss(0);

function angularCDR(req, res, next){
	req.body.agentName = req.ssoheader_agentName;
	req.body.originIP = req.headers.origin;
  // if (req.headers.authorization) {
	//   if (req.headers.authorization === sha256(config.AUTH_KEY)) {
	// 	  console.log('Matches');
	// 	  cdr.writeAngularCDR(req, res, req.body);
	//   }
  // }
}
function getPayment(req, res, next) {
	payment.startPaymentFlow(1, req, res, aCDRParams);
}
module.exports = router;

// function verifyAPIAuth(req, res, next) {
// 	if (req.session && req.session.isLoggedIn) {
// 		next();
// 	} else {
// 		var err = new Error("Unauthorized");
// 		err.status = 401;
// 		next(err);
// 	}
// }