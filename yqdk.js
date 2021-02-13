var http = require('https');

function nodePostGetRequest(HOST, PORT, method, callBackFunction, path, cookie) {
    //把将要发送的body转换为json格式 
    // var body = bodydata;
    //var bodyString = JSON.stringify(body);
    //http 头部
    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Content-Length': 620,
        'Cookie': cookie
    };

    //用与发送的参数类型
    var options = {
        host: HOST, //ip
        port: PORT, //port
        path: path, //get方式使用的地址
        method: method, //get方式或post方式
        headers: headers
    };
    var req = http.request(options, function(res) {
        res.setEncoding('utf-8');

        var responseString = '';

        res.on('data', function(data) {
            responseString += data;
        });

        res.on('end', function() {
            //这里接收的参数是字符串形式,需要格式化成json格式使用
            // var resultObject = JSON.parse(responseString);
            // console.log('-----resBody-----', resultObject);
            callBackFunction(responseString);
        });

        req.on('error', function(e) {
            // TODO: handle error.
            console.log('-----error-------', e);
        });
    });
    //req.write("bodyString");
    req.write("把 siubacy.top/提取地址的结果粘贴到此处(注意替换掉此提示文字)");
    req.end();
}

function detalCall(responseString) {
    console.log(responseString)
};
var cookies;
nodePostGetRequest("fxgl.jx.edu.cn", "443", "POST", detalCall, "/4136010895/studentQd/saveStu", cookies);
