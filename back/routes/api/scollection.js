/**
 * Created by kevin on 16/12/12.
 */
var Router = require('koa-router');
var scollectionService = require('../../services/controllers/scollection.ctrl')

function register(app) {
    var router = new Router({
        prefix: '/scollections'
    });
    router
        .get('/enterprise/:eid/page_pcount/:page/:pcount', function *(next) {
            try{
                console.log(this.jwt_auth_result, 'this is jwt auth result', this.params)
                console.log(this.path)
                var page = this.params.page;
                var pcount = this.params.pcount;
                var eid = this.params.eid;
                var scollections = yield *scollectionService.findScollectionByEnterpriseID(eid, page, pcount);
                return this.body = RES.SUCCESS(scollections,'返回成功');
            }catch (err) {
                return this.body = RES.SUCCESS({err:err},'返回失败');
            }
        })
        .post('/', function *(next) {
            this.body = 'post'
        })
        .put('/:id', function *(next) {
            this.body = RES.SUCCESS('enterprise_u','返回成功');
        })
        .del('/:id', function *(next) {
            this.body = 'del'
        })

    app.use(router.routes());
    app.use(router.allowedMethods());
}

module.exports = register;