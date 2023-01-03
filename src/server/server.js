import mongoose from "mongoose"
import express from "express"
import task from "../api/model/task.js";

const app = express();
const port = process.env.port || 5000;

const mongoURL = ""
mongoose.connect(mongoURL, {useNewUrlParser:true, useUnifiedTopology:true})

app.use(express.json({limit:"50mb"}))

app.post("/api/tasks", (req, res)=>{
    let taskData = req.body
    let mongoRecords = []
    taskData.forEach(task => {
        mongoRecords.push({
            titular: task.titular,
            descripcion: task.descripcion,
            tags: task.tags,
            creado: task.creado,
            actualizado: task.actualizado,
            seguir: task.seguir,
            autor: task.autor
        })
    })

    task.create(mongoRecords, (err, records)=> {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(records)
        }
    })

})

app.get('/api/tasks', (req, res) => {
    task.find({}, (err, docs) => {
        if(err){   
            res.status(500).send(err)
        }else{
            res.status(200).send(docs)
        }
    })
})

app.delete("/api/tasks", (req, res) => {
    task.deleteMany({}, (err) => {
        res.status(500).send(err)
     })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
