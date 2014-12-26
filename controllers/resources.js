'use strict';

import co from 'co';
import Resource from '../models/resource';

var ResourcesController = {
  index(req, res, next) {
    co(function*() {
      var resources = yield Resource.find().exec();
      res.end(JSON.stringify(resources));
    });
  }
};

export default ResourcesController;
