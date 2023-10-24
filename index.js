const express = require('express');
const app = express();
const port = 3000;
const redis = require('redis');

const client = redis.createClient({
  host: '127.0.0.1',
  port: 6379
});

client.on('error', (err) => {
  console.log("Error " + err);
});

client.on('connect', () => {
  console.log('Redis client connected');
});
client.connect();

;

app.get('/', async(req, res) => {
  await client.set("name","jokhendra");
  res.send('Hello Everyone this is my first CICD project base on AWS Docker Jenkins');
});

app.get('/nothing',(req,res) => res.json({success: true, message: 'Hello Nothing!'}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));  
