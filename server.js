var liveServer = require('live-server');

var params = {
    port: 5500,
    host: '0.0.0.0',
    root: './src',
    noCssInject: true
};

liveServer.start(params);
