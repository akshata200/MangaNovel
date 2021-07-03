const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const app = express();

dotenv.config({
    path: "config.env"
});

const port = process.env.PORT || 8080;

// setting veiw engine
app.set("view engine", "ejs");

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

// load router
app.use('/', require('./server/routes/router'));

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})