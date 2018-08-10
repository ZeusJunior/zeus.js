exports.printMsg = function() {
  console.log("Module is working");
}

// test

var request = require('request');

exports.heartbeat = function(usertoken, type) {
	request.post(
    'https://backpack.tf/api/aux/heartbeat/v1',
    { json: 
        { 
            token: usertoken, 
            automatic: type,
            i_understand_the_risk: 'true',
        } 
    },
        function (error, response, body) {
            console.log(body);
        }
    );
}