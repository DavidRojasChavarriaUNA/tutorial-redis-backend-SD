"use strict";
const { Redis } = require('ioredis');
const client = new Redis({
    port: 19918, // Redis port
    host: "redis-19918.c61.us-east-1-3.ec2.cloud.redislabs.com", // Redis host
    username: "default", // needs Redis >= 6
    password: "tGGIkmMC8SIBu3pH9A1juXQyUWVrQDZl",
    db: 0, // Defaults to 0
  });
module.exports = client;
