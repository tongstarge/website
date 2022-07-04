const fastify = require('fastify')({
    logger: true
})
const fs = require('fs');

fastify.get('/', function (request, reply) {
    const web = fs.readFileSync('index.html','utf-8')
    reply.type('text/html').send(web)
})

fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})
