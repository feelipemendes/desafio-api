 'use strict'

 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const schema = new Schema({
     name: {
         type: String,
         required: [true,'O campo name é obrigatório'],
         unique: true
     },
     weather: {
         type: String,
         required: [true, 'O campo weather é obrigatório']
     },
     land: {
         type: String,
         required: [true, 'O campo land é obrigatório']
     },
     films: {
         type: Number
     }
 });

 module.exports = mongoose.model('Planet', schema);