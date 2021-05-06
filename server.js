const path = require("path");
const express = require("express");
const app = express();
const staticpath = path.join(__dirname,"public");
const port = process.env.PORT ||  8000;
app.use(express.static(staticpath));
// app.get("/",(req,res) => {
//     res.send("hii");
// });

app.listen(port,()=> {
    console.log("server ready");
});