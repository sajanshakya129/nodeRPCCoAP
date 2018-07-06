const coap    = require('coap')
    , server  = coap.createServer()
    , async	  = require('async')

var callback=async function(req, res) {
	var payload_json = JSON.parse(req.payload.toString()); //parsing request to JSON
	var result=exposed_func[payload_json.funcName](payload_json.parameters);
	setTimeout(function(){//accessing function
		res.setOption('Block2', new Buffer([2]));
		res.end(result);//sending output to client
	}, 1500)
};

server.on('request', callback)

//class for exposed functions that can be accessed by clients
class exposed_func{
	static findAverage(param){
		return 'Average is '+(param.reduce((a, b) => a + b, 0))/param.length;
	}
	static sum(param){
			//testing how delay works
    		return 'Sum is '+param.reduce((a, b) => a + b, 0);
	}
}

//servers running and listening
server.listen(function() {
  console.log('server started');
})