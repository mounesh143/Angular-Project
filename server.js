const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const http = require('http');
const helmet = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const db = require('./server/utils/database');
var cls = require('continuation-local-storage');
const logger = require('./server/utils/logger');
const cdr = require('./server/utils/cdr');
const serverConfig = require('./server/config');
const config = require('./server/utils/config');
const api = require('./server/api');
const url = require('url');
var agentName = '';
var payment = require('./server/plugins/payment');

const app = express();

/* app.use((req, res, next) => {
	console.log("Headers---" + JSON.stringify(req.headers));
	if(req.headers.host == serverConfig.SSO_HOST && req.headers.oam_remote_user) {
		console.log("inside sso host");
		next();
	}else{
		
		console.log("inside non sso host");
		res.sendFile(path.join(__dirname, 'src/errorForbidden.html'));
	}	
}); */ 

app.use(helmet());
app.use(compression());
app.use(cookieParser());


// var originsWhitelist = [
//   'http://nlwowcrvd05.mtn.co.za:4444','http://10.206.3.39:4200'
// ];
// var corsOptions = {
//   origin: function(origin, callback){
//         var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
//         callback(null, isWhitelisted);
//   },
//   credentials:true
// }

// app.use(cors(corsOptions));

cls.createNamespace(config.STORAGE.namespace);




app.use((req, res, next) => {
	  var start = new Date();
	  req.tid = "";
	  if(process.env.NODEID){
		req.tid = [req.tid, process.env.NODEID].join("");
	  }
	  req.tid = [req.tid, Date.now()].join("");
	  req.starttime = Date.now();
	  req.status = 200;
	  req.cdr = new Object;
	  res.cookie('agentName', 'User Agent');
	  
	  res.header('Access-Control-Allow-Origin', '*');
	  res.header('Access-Control-Allow-Headers','X-Requested-With, Content-Type, Authorization');
	  res.header('Access-Control-Allow-Methods','GET, POST');
	  
	  var namespace = cls.getNamespace(config.STORAGE.namespace);
	  namespace.bindEmitter(req);
	  namespace.bindEmitter(res);
	  namespace.run(() => {
		  // console.log("inside namespace next");
		next();
	  });
	  res.on('finish', () => {
		const end = new Date();
		logger.writeCDR(start, end, req);
	  });
	  // console.log("inside namespace next outside");

	// }
});

	
config.SESSION.store = new MongoStore({url: config.DB.url});
app.use(session(config.SESSION));

// app.use(bodyParser.json({strict: false}));
// app.use(bodyParser.urlencoded({extended: false}));


app.use(validator());

app.use((req, res, next) => {
	console.log("outside-113--");
  for(var item in req.body){
    req.sanitize(item).escape();
  }
  next();
});

app.use((req, res, next) => {
	console.log("outside-114--");
  req.session._garbage = Date();
  req.session.touch();
  next();
});

app.post('/app/api/paygateRedirect', (req, res, next) => {
		console.log("inside PayGate Redirect");
		var form = '<html> <body> <p>Hello</p> <form action=" https://secure.paygate.co.za/payweb3/process.trans" method="POST" name="paymentResponse"> <input type="hidden" name="PAY_REQUEST_ID" value="7B44FC55-CA90-1922-B32D-00DD010772DB"> <input type="hidden" name="CHECKSUM" value=" f70798309e2d882e2796657c07b1af38"> </form> <script language="JavaScript"> document.forms["paymentResponse"].submit(); /* window.close(); */ </script> </body> </html>';
		res.send(form);
}); 



app.get('/app/api/Download', (req, res) => {
	console.log('Inside Download PDF');
	var file = __dirname + '/server/report.pdf';
  res.download(file);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/app/api/Payment', (req, res) => {
	console.log('Inside Payment', req.body.name);
	// payment.printIt();
	var form = '<html> <body><form action=" https://secure.paygate.co.za/payweb3/process.trans" method="POST" name="paymentResponse"> <input type="hidden" name="PAY_REQUEST_ID" value="7B44FC55-CA90-1922-B32D-00DD010772DB"> <input type="hidden" name="CHECKSUM" value=" f70798309e2d882e2796657c07b1af38"> </form> <script language="JavaScript"> document.forms["paymentResponse"].submit(); /* window.close(); */ </script> </body> </html>';
	res.send(form);
});

app.use('/app/api', api);


app.use(express.static(path.join(__dirname, 'dist')));

app.get('/app/*', (req, res) => {
	console.log("inside app");
	console.log("Headers---" + JSON.stringify(req.headers));
	logger.writeLog('debug', 'Headers :' + JSON.stringify(req.headers));
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use((req, res, next) => {
  var err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.ENV == "dev" ? err : {};
  req.status = err.status || 500;
  res.status(err.status || 500);
  res.send(res.locals.error);
});

const port = serverConfig.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`FIXED LTE SERVER RUNNING in localhost:${port}`);
});


