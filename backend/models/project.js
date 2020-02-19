'use strict'

let mongus = require("mongoose");
let schema = mongus.Schema;

let projectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs:[String]
});

module.exports = mongus.model('Project', projectSchema);