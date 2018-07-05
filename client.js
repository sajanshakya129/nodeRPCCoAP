const coap  = require('coap') // or coap
    , req   = coap.request('coap://localhost/Matteo')

    var payload={
    		funcName:"findAverage",
    		parameters:[10,20]
    }
    req.write(JSON.stringify(payload));
    

req.on('response', function(res) {
  res.pipe(process.stdout)
})

req.end()