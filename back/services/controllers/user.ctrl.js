/**
 * Created by kevin on 16/12/8.
 */
var db = require('../models');

module.exports.findById = function(id) {

    var str = `
    SELECT createdTime from ecp.user where id = ${id};
    `;
    return db.sequelize.query(str,{plain : true,  raw : true});
}