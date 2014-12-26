'use strict';

import express from 'express';
import ResourcesController from '../controllers/resources';

var resourcesRoutes = function(app) {
  var router = express.Router();

  router.get('/', function(req, res, next) {
    ResourcesController.index(req, res, next);
  });

  app.use('/resources', router);
};

export default resourcesRoutes;
