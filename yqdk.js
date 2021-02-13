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
    req.write("province=%E6%B1%9F%E8%A5%BF%E7%9C%81&city=%E8%B5%A3%E5%B7%9E%E5%B8%82&district=%E7%AB%A0%E8%B4%A1%E5%8C%BA&street=%E7%AB%A0%E6%B1%9F%E5%8D%97%E5%A4%A7%E9%81%93&xszt=0&jkzk=0&jkzkxq=&sfgl=1&gldd=&mqtw=0&mqtwxq=&zddlwz=%E6%B1%9F%E8%A5%BF%E7%9C%81%E8%B5%A3%E5%B7%9E%E5%B8%82%E7%AB%A0%E8%B4%A1%E5%8C%BA&sddlwz=&bprovince=%E6%B1%9F%E8%A5%BF%E7%9C%81&bcity=%E8%B5%A3%E5%B7%9E%E5%B8%82&bdistrict=%E7%AB%A0%E8%B4%A1%E5%8C%BA&bstreet=%E7%AB%A0%E6%B1%9F%E5%8D%97%E5%A4%A7%E9%81%93&sprovince=%E6%B1%9F%E8%A5%BF%E7%9C%81&scity=%E8%B5%A3%E5%B7%9E%E5%B8%82&sdistrict=%E7%AB%A0%E8%B4%A1%E5%8C%BA&lng=114.93590908&lat=25.84529554&sfby=1");
    req.end();
}

function detalCall(responseString) {
    console.log(responseString)
};
nodePostGetRequest("fxgl.jx.edu.cn", "443", "POST", detalCall, "/4136010895/studentQd/saveStu", "JSESSIONID=03D79F9A8DE8FA0900712639D3F84C3B; JSESSIONID=03D79F9A8DE8FA0900712639D3F84C3B");