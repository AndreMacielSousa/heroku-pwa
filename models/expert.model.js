const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const expertSchema = new Schema({
    name: String,
    species: String,
    birth_date: {
        type: Date,
        default: Date.now
    },
    description: String,
    location: {
        city: String,
        district: String,
        country: String
    },
    username: String,
    password: String,
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.expert, expertSchema);