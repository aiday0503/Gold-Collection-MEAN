const mongoose = require('mongoose');
const Gold = mongoose.model('Gold');

module.exports = {
    show: function(req, res) {
        Gold.find({}, function(err, data) {
            if (data) {
                res.json({ message: "Success", data: data })
            } else if (err) {
                console.log(err);
                res.json({ message: "error", err: err });
            }
        })
    },
    add: function(req, res) {
        Gold.create({ total: req.body.gold, log: req.body.logs }, function(err, data) {
            if (data) {
                res.json({ message: "Success", data: data })
            } else if (err) {
                console.log(err);
                res.json({ message: "error", err: err });
            }
        })
    }
}