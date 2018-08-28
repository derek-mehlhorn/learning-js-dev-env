// have babel transpile before tests run.
require('babel-register')();

// Disable webpack features that mocha doesn't understand (e.g. import css)
require.extensions['.css'] = function() {};
