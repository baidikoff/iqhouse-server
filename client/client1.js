/**
 * Created by nickbaidikoff on 12/6/16.
 */

var mqtt = require('mqtt')

var client = mqtt.connect('mqtt://192.168.43.78:1883')
client.subscribe('microcimate');

console.log('Client publishing...');
client.publish('microcimate', '0');

client.end();
