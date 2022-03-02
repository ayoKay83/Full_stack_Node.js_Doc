const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

// -- Components --
const nav = fs.readFileSync("./public/components/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();

// -- Pages --
const frontPage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const javascriptPage = fs.readFileSync("./public/pages/javascript/javascript.html").toString();
const toolsPage = fs.readFileSync("./public/pages/tools/tools.html").toString();
const restapiPage = fs.readFileSync("./public/pages/restapi/restapi.html").toString();
const ssrPage = fs.readFileSync("./public/pages/ssr/ssr.html").toString();

// -- Components + Pages
const completeFrontPage = nav + frontPage + footer;
const completeJavascriptPage = nav + javascriptPage + footer;
const completeToolsPage = nav + toolsPage + footer;
const completeRestapiPage = nav + restapiPage + footer;
const completeSsrPage = nav + ssrPage + footer;

app.get("/", (req, res) => {
    res.send(completeFrontPage);
});

app.get("/javascript", (req, res) => {
    res.send(completeJavascriptPage);
});

app.get("/tools", (req, res) => {
    res.send(completeToolsPage);
});

app.get("/restapi", (req, res) => {
    res.send(completeRestapiPage);
});

app.get("/ssr", (req, res) => {
    res.send(completeSsrPage);
});

const PORT = process.env.PORT || 6000;

const server = app.listen(PORT, () => {
    console.log("Server running on port", server.address().port);
});
