const mongoose = require('mongoose');

const GoldSchema = new mongoose.Schema({
    gold_count: Number,
    log: String
}, { timestamps: true })

mongoose.model('Gold', GoldSchema);


const Gold = mongoose.model('Gold', GoldSchema);