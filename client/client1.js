/**
 * Created by nickbaidikoff on 12/6/16.
 */

var mqtt = require('mqtt')

var client = mqtt.connect('mqtt://localhost:1883')
client.subscribe('clientConnected');

console.log('Client publishing...');
client.publish('clientConnected', '0');

client.end();
