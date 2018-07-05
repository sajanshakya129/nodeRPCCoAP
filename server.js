const coap    = require('coap') // or coap
    , server  = coap.createServer()

var callback=function(req, res) {
	//console.log(req);
	var payload_buf=req.payload;
	var payload_json = JSON.parse(payload_buf.toString());
	console.log(payload_json);
	console.log("calling average function");
	var result=exposed_function[payload_json.funcName](payload_json.parameters);
	//var result=window[payload_json.funcName](52,99);
	console.log("average function called returns value",result);
	res.end('Hello ' + req.url.split('/')[1] + '\n Average is'+ result);
};

server.on('request', callback)

class exposed_function{
	
	static findAverage(param){
		console.log("average function is called");
		var arr_length=param.length;
		var sum=param.reduce((a, b) => a + b, 0)
		var average=sum/arr_length;
		return average;
	}
}


server.listen(function() {
  console.log('server started');
  console.log('Server testing');
  //console.log("Server:average",findAverage(10,15));
})