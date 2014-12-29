'use strict';

import mongoose from 'mongoose';
import repl from 'repl';

import Resource from '../models/resource';

var db,
    modules;

mongoose.connect('mongodb://localhost/heapsort');
db = mongoose.connection;
db.once('open', function() {
  var replServer = repl.start({prompt: 'heapsort > '}),
      replContext = replServer.context;

  replContext.Resource = Resource;

  replServer.on('exit', function() {
    process.exit();
  });
});
