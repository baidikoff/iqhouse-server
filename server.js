/**
 * Created by nickbaidikoff on 12/6/16.
 */

var mosca = require('mosca');
var mongoose = require('mongoose');

var pub_sub_settings = {
    type: 'mongo',
    url: 'mongodb://localhost:27017/iqhouse',
    pubsubCollection: 'iqhouseCollections',
    mongo: {}
};

var settings = {
    port: 1883,
    backend: pub_sub_settings
};

var server = new mosca.Server(settings);
server.on('ready', function () {
    console.log('Server running')
});

server.published = function (packet, client, cb) {
    if (packet.topic.indexOf('echo') === 0) {
        return cb;
    }

    var newPacket = {
        topic: 'echo/' + packet.topic,
        payload: packet.payload,
        retain: packet.retain,
        qos: packet.qos
    };

    console.log('newPacket ', newPacket);
    server.publish(newPacket, cb);
};

server.on('clientConnected', function (client) {
    console.log('Client connected: ', client.id);
});

server.on('subscribed', function (topic, client) {
    console.log('Subscribed: ', topic);
});

server.on('unsubscribed', function (topic, client) {
    console.log('Unsubscribed: ', topic);
});

server.on('clientDisconnecting', function (client) {
    console.log('Client disconnecting: ', client.id);
});

server.on('clientDisconnected', function (client) {
    console.log('Client disconnected: ', client.id);
});