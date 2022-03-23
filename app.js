const express = require("express");
const app = express();
const port = 4000

const superAdmin = require('./router/superAdminRoute');
const biodata = require('./router/biodataRoute')

app.use('/', function (req, res, next){
    console.log("Time: ", Date());
    console.log("Request URL: ", req.originalUrl);
    console.log("Request Type: ", req.method)
    next ();
});

app.use(express.json());
app.use(
    express.urlencoded({
        extended:true
    })
);
app.set("view engine", "ejs")
app.set(express.static("public"))

app.use('/', superAdmin)
app.use('/', biodata)


app.listen(port, () => console.log(`listening on port ${port}!`));

