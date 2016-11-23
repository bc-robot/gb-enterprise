/**
 * Created by kevin on 16/11/14.
 */
var http = require('http');
var qs = require('querystring');
var jwt = require('jsonwebtoken');


var token = jwt.sign(
    {
        // tel: '13405045537',
        // tel: '15250078752',
        tel: '15150121121',
        // tel: '15851522151',
        params: ["验证码", "1234"],
        tpl_id: 4243
    },
    'FLZX3000Cysyhl9t_GEM',
    {
        expiresIn : 20 + 's'
    });

var data = {
    jwt_access_token: token
};

var content = qs.stringify(data);

console.log(content, 'this is content !!')

var post_req  = null,
    post_data = JSON.stringify(data);
console.log(post_data, '<<<<<<<<<<<')

var post_options =
{
    hostname: 'sms.xmgc360.com',
    port: 80,
    path: '/api/send',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': post_data.length
    }
};

post_req = http.request(post_options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('Response: ', chunk);
    });
});

post_req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

post_req.write(post_data);
post_req.end();