'use strict';

import express from 'express';
import mongoose from 'mongoose';
import resourcesRoutes from './routes/resources';

var app,
    db;

app = express();
resourcesRoutes(app);

mongoose.connect('mongodb://localhost/heapsort');
db = mongoose.connection;
db.once('open', function() {
  console.log('DB connected, start listening...');
  app.listen(3000);
});
