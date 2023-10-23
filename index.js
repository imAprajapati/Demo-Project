const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello Jokhendra and karishma this is your first CICD Project!'));

app.get('/nothing',(req,res) => res.json({success: true, message: 'Hello Nothing!'}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));  
