'use strict';

import mongoose from 'mongoose';

var resourceSchema,
    Resource;

resourceSchema = mongoose.Schema({
  title: String,
  url: String
});

Resource = mongoose.model('Resource', resourceSchema);

export default Resource;
