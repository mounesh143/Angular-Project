module.exports = {
  defaultLang: "en",
  STORAGE: {
    namespace: 'webselfcare',
    tid: 'tid',
    sessionid: 'sessionid',
    ip: 'ip'
  },
  LOG: {
    filename: './logs/webselfcare.log',
    datePattern: 'YYYY-MM-DD',
    prepend: false,
    level: 'debug'
  },
  CDR: {
    filename: './cdrs/webselfcare.cdr',
    datePattern: 'YYYY-MM-DD',
    prepend: false
  },
  USERCDR: {
    filename: './cdrs/useractivity.cdr',
    datePattern: 'YYYY-MM-DD',
    prepend: false
  },
  DB: {
    url: "mongodb://127.0.0.1:27017/webselfcare_fixedlte" ,
    connectionOptions: {
      server: {
        poolSize: 100,
        socketOptions: {
          autoReconnect: true,
          connectTimeoutMS: 30000,
          socketTimeoutMS: 30000,
          keepAlive: 120
        },
        reconnectTries: 30,
        reconnectInterval: 1000,
        ha: false,
        haInterval: 10000
      },
      replicaSet: null
    }
  },
  SESSION: {
    name: 'sessionId',
    secret: 'webselfcare',
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: 1800000,
      httpOnly: true
	  //secure: false
    },
    autoRemove: "interval",
    autoRemoveInterval: 60 //In minutes
  }
}
