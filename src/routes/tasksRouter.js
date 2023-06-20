const tasksRouter = require("express").Router();
const path = require("path");
const taskDb = require("../db.json");
const fs = require("fs");

tasksRouter.get("/", (req, res)=>{
    res.status(200).json({
        statusCode: 200,
        tasks: taskDb.tasks
    });
});

tasksRouter.get("/:id", (req, res)=>{
    const taskId = req.params.id;
    let task = taskDb.tasks.filter((item)=>{
        return item.id == taskId;
    });
    if(task.length > 0){
        res.status(200).json({
            statusCode: 200,
            task: task[0]
        });
    }else{
        res.status(400).json({
            statusCode: 400,
            error: `No result found with the provided taskId: ${taskId}`
        });
    }
});

tasksRouter.post("/", (req, res)=>{
    const taskId = req.body.id;
    let chk = taskDb.tasks.filter((item)=>{
        return item.id == taskId;
    });
    if(chk.length < 1){
        taskDb.tasks.push(req.body);
        let filePath = path.join(__dirname, "../", "db.json");
        fs.writeFileSync(filePath, JSON.stringify(taskDb), {encoding: "utf8", flag: "w"});
        res.status(200).json({
            statusCode: 200,
            message: `A new task has been added with the taskId: ${taskId}`
        });
    }else{
        res.status(400).json({
            statusCode: 400,
            error: `Can't add a new task, taskId: ${taskId} already exist in database.`
        });
    }
});


tasksRouter.put("/", (req, res)=>{
    const taskId = req.body.id;
    let chk = taskDb.tasks.filter((item)=>{
        return item.id == taskId;
    });
    if(chk.length > 0){
        let taskArr = taskDb.tasks.map((item)=>{
            if(item.id == taskId){
                return {
                    id: req.body.id,
                    assign_to: req.body.assign_to,
                    assigned_by: req.body.assigned_by,
                    title: req.body.title,
                    description: req.body.description,
                    due_date: req.body.due_date,
                    status: req.body.status,
                };
            }
            return item;
        });
        taskDb.tasks = taskArr;
        let filePath = path.join(__dirname, "../", "db.json");
        fs.writeFileSync(filePath, JSON.stringify(taskDb), {encoding: "utf8", flag: "w"});
        res.status(200).json({
            statusCode: 200,
            message: `The task has been modified for the taskId: ${taskId}`
        });
    }else{
        res.status(400).json({
            statusCode: 400,
            error: `No result found with the provided taskId: ${taskId}`
        });
    }
});


tasksRouter.patch("/", (req, res)=>{
    const taskId = req.body.id;
    let chk = taskDb.tasks.filter((item)=>{
        return item.id == taskId;
    });
    if(chk.length > 0){
        let taskArr = taskDb.tasks.map((item)=>{
            if(item.id == taskId){

                return { ...item, status: req.body.status};
            }
            return item;
        });
        taskDb.tasks = taskArr;
        let filePath = path.join(__dirname, "../", "db.json");
        fs.writeFileSync(filePath, JSON.stringify(taskDb), {encoding: "utf8", flag: "w"});
        res.status(200).json({
            statusCode: 200,
            message: `The task has been modified for the taskId: ${taskId}`
        });
    }else{
        res.status(400).json({
            statusCode: 400,
            error: `No result found with the provided taskId: ${taskId}`
        });
    }

});


tasksRouter.delete("/:id", (req, res) =>{
    const taskId = req.params.id;
    let chk = taskDb.tasks.filter((item)=>{
        return item.id == taskId;
    });
    if(chk.length > 0){
        let taskArr = taskDb.tasks.filter((item)=>{
            return item.id != taskId;
        });
        taskDb.tasks = taskArr;
        let filePath = path.join(__dirname, "../", "db.json");
        fs.writeFileSync(filePath, JSON.stringify(taskDb), {encoding: "utf8", flag: "w"});
        res.status(200).json({
            statusCode: 200,
            message: `The task has been deleted for the taskId: ${taskId}`
        });
    }else{
        res.status(400).json({
            statusCode: 400,
            error: `No result found with the provided taskId: ${taskId}`
        });
    }
});


module.exports = tasksRouter;