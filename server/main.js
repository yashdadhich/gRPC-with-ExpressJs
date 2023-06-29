import express from "express";
import path from 'path'
import client from './client.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {

    client.getUsers(null, (err, data) => {
        if(!err){
            res.send(data);
        } else {
            console.error(err);
            res.status(500).send({
                msg:"there are some issue",
            })
        }
    })
})

app.post ("/add", (req, res) => {
    const user = req.body;

    client.addUser(user, (err, data) => {
        if (!err){
            console.log(data);
            res.send({
                message : "Data added successfully",
            });
        } else {
            console.error(err);
            res.status(500).send({
                msg:"there are some issue",
        })
    }
})
})


app.listen(5555, () => {
    console.log("server started");
});