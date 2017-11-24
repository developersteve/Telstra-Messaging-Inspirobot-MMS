const request = require('request');
const express = require('express');
var base64 = require('node-base64-image');
var http = require("http");
var bodyParser = require('body-parser');

const app = express()

const lib = require('./lib');
const oAuthManager = lib.OAuthManager;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

lib.Configuration.oAuthClientId = 'Add ClientID here'; // OAuth 2 Client ID
lib.Configuration.oAuthClientSecret = 'Add Secret here'; // OAuth 2 Client Secret

app.put('/', function (req, res) {

    lib.Configuration.oAuthTokenUpdateCallback = function(token) {
        //token generated
    };

    const scopes = [lib.OAuthScopeEnum.NSMS];
    const promise = oAuthManager.authorize(scopes);

    promise.then((success) => {   

        request.get('http://inspirobot.me/api?generate=true', function (error, response, body) {

            if (!error && response.statusCode == 200) {            

                base64.encode(body, {string: true}, function (err, image) {
                    if (err) {
                        console.log(err);
                    }

                    var mmsImg = {
                            'type': 'image/jpeg',
                            'filename': 'image.jpg',
                            'payload': image,
                        };

                    //prep MMS send payload
                    var payload = {
                            'to': req.body.from,
                            'from': '',
                            'replyRequest': false,
                            'MMSContent': [mmsImg],
                        };

                    var controller = lib.MessagingController;

                    controller.createSendMMS(payload, function(error, response, context) {

                        console.dir(response);

                    });

                });                   
            }

        });

    }, (exception) => {
        // error occurred, exception will be of type lib/Exceptions/OAuthProviderException
    });

});

app.listen(8080, function (err) {
  if (err) {
    throw err
  }
 
  console.log('Server started on port 8080')
})