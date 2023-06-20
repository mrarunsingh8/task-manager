const tasks = require("express").Router();
const taskDb = require("./../db.json");

tasks.get("/", (req, res)=>{
    res.status(200).json({
        statusCode: 200,
        task: taskDb.tasks
    });
});



module.exports = tasks;