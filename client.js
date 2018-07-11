const coap  = require('coap')
      async = require("async");
    // , req   = coap.request('coap://localhost/Matteo')//default setup for COAP


var coapConnection = { //Customised setup for coap
    host: 'localhost',
    pathname: '/hello',
    method: 'GET',
    confirmable: true
}

var req = coap.request(coapConnection);
var payload={//payload format to be sent to server, which contains function name and parameters sent
		funcName:"sum",
		parameters:[10,20]
}
req.write(JSON.stringify(payload));//sending request

req.on('response', async function(res) {//on arrival of response show result
  res.pipe(process.stdout);
})
req.end()

var req2 = coap.request(coapConnection);

var payload2={//payload format to be sent to server, which contains function name and parameters sent
		funcName:"findAverage",
		parameters:[10,20]
}
req2.write(JSON.stringify(payload2));
req2.on('response', async function(res) {//on arrival of response show result
  res.pipe(process.stdout);
})
req2.end()
