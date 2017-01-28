'use strict';

var sqlite3         =       require('sqlite3').verbose();
var db              =       new sqlite3.Database('database/kokeilu.db');

const Path = require('path');
const Hapi = require('hapi');
const Good = require('good');

const server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: 8000 });

server.register(require('inert'), (err) => {
    if (err) {
        throw err;
    }
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'public'
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/contactList',
        handler: function (request, reply) {
            db.each("SELECT * FROM stats", function(err, row) {
                console.log(row);
                reply(row);
            });
        }
    });


    server.route({
        method: 'POST',
        path: '/contactList',
        handler: function (request, reply) {
            console.log(request.payload);
            var stmt = db.prepare("INSERT INTO stats VALUES (?,?,?,?)");
            }
    });
});

server.register({
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}, (err) => {

    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start((err) => {

        if (err) {
            throw err;
        }
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});