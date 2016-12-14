/**
 * Created by kevin on 16/12/12.
 */
module.exports = function(sequelize, Sequelize) {
    var model = sequelize.define('EnterpriseIntern',
        {
            enterprise_id: {
                type: Sequelize.INTEGER,
            },
            intern_id: {
                type: Sequelize.INTEGER
            },
            // 企业和实习生的状态 0.申请成功 1.申请中 2.申请失败
            status: {
                type: Sequelize.INTEGER,defaultValue : 1
            },
            created_at: {
                type:Sequelize.DATE
            },
            updated_at: {
                type:Sequelize.DATE
            },
            deleted_at: {
                type:Sequelize.DATE
            }
        },
        {
            'freezeTableName': true,
            'tableName': 'enterprise_intern',
            'timestamps': true,
            // 'createdAt': 'create_time',
            // 'updatedAt': false,
            // 将deletedAt字段改名
            // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
            // 'deletedAt': 'dtime',
            'paranoid': true,
            defaultScope: {
                where: {
                    // username: 'dan'
                },
                limit: 12
            },
        });
    model.removeAttribute('id');
    // model.sync({force:true});
    return model;
}