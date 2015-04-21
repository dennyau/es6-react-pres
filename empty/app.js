require('babel/register');  // gives Node the power to read/transpile to ES6 on the fly/runtime

var koa = require('koa');
var route = require('koa-route');
var serve = require('koa-static');
var mount = require('koa-mount');  // almost like chasing down symlinks

var React = require('react');  // frontend UI framework
var _ = require('lodash');  // templating
var fs = require('fs'); // to read filesystem

var baseTemplate = fs.readFileSync('./baseTemplate.html');
var ClientApp = require('./jsx/index.jsx');

var app = koa();

app.use( mount('/fa', serve('../node_modules/font-awesome')) );
app.use( mount('/public', serve('./public')) );

app.use( route.get('/', function *() {   // Url routing
    var rendered = React.renderToString(React.createElement(ClientApp));
// can't do var rendered = React.rendertoString(<ClientApp />);  --- because it's not JSX
    this.body = _.template(baseTemplate)({body:rendered});
}) );

app.listen(38080);
