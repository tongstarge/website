const fastify = require('fastify')({
    logger: true
})
const fastifyStatic = require('@fastify/static')
const path = require('path');

fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'app'),
    serve: false 
})
fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'app/static'),
    prefix: '/static/',
    decorateReply: false
})
/*
fastify.get('*',function (request, reply) {
    reply.sendFile('building.html');
})
*/

fastify.get('/', function (request, reply) {
    reply.sendFile('index.html');
})

fastify.get('*', function (request, reply) {
    reply.sendFile('404.html');
})

fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})
