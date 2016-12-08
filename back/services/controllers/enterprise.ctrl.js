/**
 * Created by kevin on 16/12/8.
 */
var db = require('../models');
var Enterprise = db.Enterprise;

module.exports.add = function(id) {
    Enterprise.findById(1).then(function(_enterprise) {
        console.log(_enterprise, 'this is enterprise');
    })
}