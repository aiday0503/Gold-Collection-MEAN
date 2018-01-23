const mongoose = require('mongoose');
const Gold = mongoose.model('Gold');
const golds = require('../controllers/golds.js');
const path = require('path');

module.exports = function(app) {

    app.get('/gold', function(req, res) {
        golds.getAll(req, res)

    })
    app.post('/gold', function(req, res) {
        golds.add(req, res)
    })
    app.patch('/gold', function(req, res) {
        golds.update(req, res)
    })

    //any localhost8000/kfblhlhfskl will render index.html
    app.get('*', (req, res) => {
        res.sendFile(path.resolve('./client/dist/index.html'))
    })
}