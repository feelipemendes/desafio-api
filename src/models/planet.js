 'use strict'

 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const schema = new Schema({
     name: {
         type: String,
         required: true,
         unique: true
     },
     weather: {
         type: String,
         required: true
     },
     land: {
         type: String,
         required: true
     }
 });

 module.exports = mongoose.model('Planet', schema);