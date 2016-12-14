/**
 * Created by kevin on 16/12/8.
 */

module.exports = function(sequelize, Sequelize) {
    var model = sequelize.define('Enterprise',
        {
            authorid: {
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING
            },
            logo: {
                type: Sequelize.STRING
            },
            brief: {
                type: Sequelize.STRING
            }
        },
        {
            'freezeTableName': true,
            'tableName': 'enterprise',
            'timestamps': true,
            'createdAt': 'create_time',
            'updatedAt': false,
            // 将deletedAt字段改名
            // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
            // 'deletedAt': 'dtime',
            // 'paranoid': true,
            defaultScope: {
                where: {
                    // username: 'dan'
                },
                limit: 12
            },
        });
    return model;
}