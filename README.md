# Using the Telstra Messaging API in NodeJS to send a MMS image generated from [Inspirobot.me](https://inspirobot.me)

This is an example of the Telstra Messaging API using plain PHP to send a SMS.

This code uses the [NodeJS SDK](https://github.com/telstra/MessagingAPI-SDK-node)

## Technology

This demo uses

* NodeJS

## Requirements

* Valid and active client_id and client_secret from [Dev.Telstra.com](https://dev.telstra.com).
* A valid and active mobile number subscription against the demo app using the povisioning API, as part of this you will need to register the webhook callback for where the script is running (Note: this will have to be a public available url).

## Running the demo

* Update client_id and client_secret from [Dev.Telstra.com](https://dev.telstra.com) into ./app.js
* Run `npm install` to add dependencies
* Run  `Node app.js` to start the server
* Send a SMS message to your provisioned app number (anything at all) to trigger a [Inspirobot.me](https://inspirobot.me) response back.

## Useful link

* [Messaging API getting started](https://dev.telstra.com/content/messaging-api-getting-started)
