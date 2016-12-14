/**
 * Created by kevin on 16/12/12.
 */
var db = require('../models');
var Scollection = db.Scollection;

module.exports.findScollectionByEnterpriseID = function *(enterprise_id, page, pcount) {
    console.log(' - - - - -- - - - - - - - - -', page, pcount)
    var scollections = yield Scollection.findAndCountAll({
        'limit': parseInt(pcount),                      // 每页多少条
        'offset': parseInt(pcount) * (parseInt(page) - 1),  // 跳过多少条
        where: {
            enterpriseid: enterprise_id,
        },
        order: [
            ['starttime','DESC'],
            ['id','DESC']
        ]
    });
    return scollections;
}