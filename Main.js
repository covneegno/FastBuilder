#! /usr/bin/env node

const colorize = require('./core/colorize');
const WSServer = require('./core/wsserver');
const BuildSession = require('./core/session');
const profile = require('./core/profile')

var wss = new WSServer(8080);
console.log(colorize('Server is running at ws://' + require('os').networkInterfaces()[Object.keys(require('os').networkInterfaces())[1]][0].address + ':8080').blue);
console.log(colorize(profile.logo).blue);

wss.on('client', function(session, request) {
  BuildSession.createAndBind(session);
  console.log(request.connection.remoteAddress, 'connected!');
});