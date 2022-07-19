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

const start = async () => {
    try {
        const p = 3000;
        await fastify.listen({ port: p })
        console.log('启动:http://localhost:' + p + '/')
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
