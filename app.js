const express = require("express");
const app = express();
const port = 80;

app.use('/static', express.static('static'))

app.get("/", (req, res)=> {
      res.send("Hey I was doing just fine.")
});
app.get("/about", (req, res)=> {
      res.send("About.")
});
app.post("/about", (req, res)=> {
      res.send("posting about postman ")
});
app.get("/pappu", (req, res)=> {
      res.status(404).send("404 File Not Found.");
});

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})