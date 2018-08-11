exports.printMsg = function() {
  console.log("Module is working");
}

// test

var request = require('request');

exports.heartbeat = function(userToken, type, timeOut) {
	if (!timeOut) {
		console.log('timeOut is not set')
	} else if (isNaN(timeOut)) {
		console.log('timeOut must be a number')
	} else if (timeOut < 90000) {
		console.log('timeOut must be more than 90000ms to avoid spamming backpack.tf')
	} else {
	
	setInterval(function() {
	request.post(
    'https://backpack.tf/api/aux/heartbeat/v1',
    { json: 
        { 
            token: userToken, 
            automatic: type,
            i_understand_the_risk: 'true',
        } 
    },
        function (error, response, body) {
            console.log(body);
        }
    );
}, timeOut);
	}
}
