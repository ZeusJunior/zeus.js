const SteamUser = require('steam-user');
const client = new SteamUser();

const SteamCommunity = require('steamcommunity');
const community = new SteamCommunity();

const TradeOfferManager = require('steam-tradeoffer-manager');
const manager = new TradeOfferManager({
    steam: client,
    community: community,
    language: 'en'
});

exports.printMsg = function () {
    console.log("Module is working");
}

// heartbeat

var request = require('request');

exports.heartbeat = function (userToken, type, timeOut) {
    if (!timeOut) {
        console.log('heartbeat timeOut is not set, using 90000ms default')

        setInterval(function () {
            request.post(
                'https://backpack.tf/api/aux/heartbeat/v1', {
                    json: {
                        token: userToken,
                        automatic: type,
                        i_understand_the_risk: 'true',
                    }
                },
                function (error, response, body) {
                    console.log(body);
                }
            );
        }, 90000);
    }
    else if (isNaN(timeOut)) 
        console.log('heartbeat timeOut must be a number')
    
    else if (timeOut < 90000) 
        console.log('heartbeat timeOut must be 90000ms or more to avoid spamming backpack.tf')
    else {
        setInterval(function () {
            request.post(
                'https://backpack.tf/api/aux/heartbeat/v1', {
                    json: {
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

// for prosux

exports.webSession = function (identitySecret, timeOut) {
    if (!timeOut) {
        console.log('webSession timeOut is not set, using 10000ms default')
        client.on('webSession', (sessionid, cookies) => {
            manager.setCookies(cookies);
            community.setCookies(cookies);
            community.startConfirmationChecker(10000, identitySecret);
        });
    } 
    else if (isNaN(timeOut)) 
        console.log('webSession timeOut must be a number')
    
    else if (timeOut < 10000) 
        console.log('webSession timeOut must be 10000ms or more to avoid spamming steam')
    
    else {
        client.on('webSession', (sessionid, cookies) => {
            manager.setCookies(cookies);
            community.setCookies(cookies);
            community.startConfirmationChecker(timeOut, identitySecret);
        });
    }
}
