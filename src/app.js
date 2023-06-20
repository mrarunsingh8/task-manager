const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const tasks = require("./routes/tasks");

const app = express();

app.get("/", (req, res)=>{
    res.send("Working fine.");
});

app.use("/tasks", tasks);

app.listen(process.env.PORT, (err)=>{
    console.log(`Server is starting on PORT: ${process.env.PORT}`);
});