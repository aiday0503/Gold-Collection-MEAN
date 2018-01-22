const mongoose = require('mongoose');
// create the schema
const GoldSchema = new mongoose.Schema({
    total: { type: Number },
    log: { type: String }
}, { timestamps: true })

mongoose.model('Gold', GoldSchema);

// register the schema as a model
const Gold = mongoose.model('Gold', GoldSchema);