'use strict';

import mongoose from 'mongoose';

var resourceSchema,
    Resource,
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

resourceSchema = mongoose.Schema({
  title: {type: String, required: true},
  domain: {type: String, required: true},
  path: String,
  queryString: String,
  port: {type: Number, required: true, default: 80},
  protocol: {
    type: String, required: true, default: 'http',
    enum: {values: ['http', 'https'], message: 'protocol is invalid'}
  },
  description: String,
  user: {type: ObjectId, required: true, index: true},
  category: {type: ObjectId, required: true, index: true},
  createdAt: {type: Date, default: Date.now, index: true},
  updatedAt: {type: Date, default: Date.now}
});

Resource = mongoose.model('Resource', resourceSchema);

export default Resource;
