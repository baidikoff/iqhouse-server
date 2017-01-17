/**
 * Created by nickbaidikoff on 12/6/16.
 */

var mqtt = require('mqtt');

var client = mqtt.connect('mqtt://localhost:1883');
client.subscribe('clientConnected');

client.on('message', function (topic, message) {
    var text = message.toString();
    console.log(text);
});

console.log('Client started...');
