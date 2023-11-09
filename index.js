const express = require('express');
const app = express();
const port = 3000;



app.get('/', async(req, res) => {
  res.json({
    success:true,
    message:"Hello world this is first CI/CD declerative pipeline"
  });
});

app.get('/nothing',(req,res) => res.json({success: true, message: 'Hello Nothing!'}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));  
