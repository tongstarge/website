const fastify = require('fastify')({
    logger: true
})
const { readFileSync } = require('fs');
const path = require('path');

fastify.get('/', function (request, reply) {
    const file = path.join(process.cwd(), 'app', 'index.html');
    const web = readFileSync(file, 'utf-8')
    reply.type('text/html').send(web)
})
/*fastify.get('/image/*', function (request, reply) {
    const file = path.join(process.cwd(), 'app', request.url);
    const files = readFileSync(file)
    reply.type('image/x-icon').send(files)
})*/
fastify.get('*', function (request, reply) {
    const file = path.join(process.cwd(), 'app', '404.html');
    const web = readFileSync(file, 'utf-8')
    reply.type('text/html').send(web)
})

fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})
