

const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password:  process.env.REDIS_PASS,
    socket: {
        host: 'redis-17101.c322.us-east-1-2.ec2.cloud.redislabs.com',
        port: 17101
    }
});

module.exports = redisClient;