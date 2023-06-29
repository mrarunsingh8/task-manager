const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");

const tasksRouter = require("./routes/tasksRouter");
const perfectExpressSanitizer = require("perfect-express-sanitizer");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(perfectExpressSanitizer.clean({
    xss: true,
    noSql: true,
    sql: true
}));

app.get("/", (req, res)=>{
    res.send("Working fine.");
});

app.use("/api/tasks", tasksRouter);

app.listen(process.env.PORT, (err)=>{
    console.log(`Server is starting on PORT: ${process.env.PORT}`);
});