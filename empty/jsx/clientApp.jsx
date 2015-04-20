var React = require('react');
var App = require('./index.jsx');
//var App = require('./index');   //  This works too - look into why

React.render(<App/>,window.document.querySelector('#target'));  // please create one instance of App inside #target
//React.render(<App/>,document.querySelector('#target'));  // don't always need "window" - if you want to do server side rendering, you can't use 'window'
