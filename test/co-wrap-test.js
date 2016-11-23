/**
 * Created by kevin on 16/11/14.
 */
var co = require('co');
let request = require('co-request')
var jwt = require('jsonwebtoken');


var token = jwt.sign(
    {
        // tel: '13405045537',
        // tel: '15250078752',
        tel: '15150121121',
        // tel: '15851522151',
        params: ["验证码","2","3"],
        tpl_id: 5032,
        iat: Date.now(),
        exp: Date.now() + 10000,
    },
    'FLZX3000Cysyhl9t_GEM');

var data =  {
    jwt_access_token: token
};//这是需要提交的数据

var headers = {
    'Content-Type': 'application/json'
};

var options = {
    // url: 'http://121.41.41.46:4003/api/send',
    url: 'http://localhost:52514/api/send',
    // url: 'http://localhost:4003/api/send',
    // url: 'http://sms.xmgc360.com/api/send',
    method: 'POST',
    headers: headers,
    json: data
}

co(function *() {
    let result = yield request(options)
    console.log(result.body)
}).catch(function(err) {
    console.err(err);
})
