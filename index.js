const app = require('./app');
const port = 8080;
const HOST = '0.0.0.0';
app.listen( port, HOST, ()=> console.log('Server Started in PORT : '+ HOST + ' : ' +  port) );