"use strict"
const redis = require('./redisDB');
const headers = require('./headersCORS');
exports.handler = async (event, context) => {
  if (event.httpMethod == "OPTIONS") {
    return { statusCode: 200, headers, body: "OK" };
  }
  try {
    const id = event.path.split("/").reverse()[0];

    redis.on("connect", function() {
      console.log("You are now connected");
    });
    const result = await redis.del('book_'+id);
    if(result)
      await redis.decr('book_N');

    return { statusCode: 200, headers, body: 'OK'};
  } catch (error) {
    console.log(error);
    return { statusCode: 422, headers, body: JSON.stringify(error) };
  }
};
