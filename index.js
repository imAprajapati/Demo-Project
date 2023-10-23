const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello Karishma this is your first CICD Project!'));

app.get('/nothing',(req,res) => res.json({success: true, message: 'Hello Nothing!'}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));  
