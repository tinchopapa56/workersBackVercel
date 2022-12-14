const express = require ("express");
const mongoose =  require ("mongoose") ;
const Workers =  require ("./workerSchema.js") ;
// const users =  require ("./UserSchema.js") ;
const cors =  require ("cors") ;


// // App config

const app = express();


//Mongo connection
    const pass_Word = "Workers-hub1234";
    const connectionUrl = `mongodb+srv://Workers-hub:${pass_Word}@workers-hub.iiibfun.mongodb.net/?retryWrites=true&w=majority`
    const options = {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
    }
    // mongoose.connect(connectionUrl, options)
    // .catch(error => handleError(error));

    mongoose.connect(connectionUrl, options).then(
        () => { console.log("succesfully connected to DB") },
        err => {  handleError(err); console.log(err) }
      );

// Middlewares
    app.use(express.json());
    app.use(cors());



// API Endpoints
app.get("/", (req, res) => {

    res.status(200).send("Server created with everything uncommmented: debugging")
})

// app.post("/workers", (req, res) => {
//     const workerCard = req.body;

//     workers.create(workerCard, (err,data)=>{
//         if(err) res.status(500).send(err) 
//         res.status(201).send(data)
//     })
// })
// app.post("/users", (req, res) => {
//     const userCard = req.body;

//     users.create(userCard, (err,data)=>{
//         if(err) res.status(500).send(err);
//         else res.status(201).send(data);
//     })
// })

app.get("/workers", (req, res) => {
    Workers.find( (err,data) => {
        if(err) res.status(500).send(err);
        res.status(200).send(data);
    })
})
app.get('/about', (req, res) => {       //esto anda bien WROKERS NO
    const texto = "dale locewtwetweto about"
    res.send(texto)
});
// app.get("/users", (req, res) => {
//     users.find( (err,data) => {
//         if(err)  res.status(500).send(err)
//         res.status(200).send(data)
//     })
// })

// app.delete("/users/:userId", (req,res) =>{
//     let userId = req.params.userId;

//     users.findById(userId, (err, user) =>{
//     if(err) res.status(500).send({message: `Error finding ID user: ${err}`});
    
//         user.remove(err => {
//             if(err) res.status(500).send({message: `Error REMOVING user: ${err}`});
//             res.status(200).send({message: "User SUCCESFULLY deleted"})
//         })
//     })
// })
// app.delete("/workers/:workerId", (req,res) =>{
//     const workerId = req.params.workerId;

//     workers.findById(workerId, (err, worker) =>{
//         if(err) res.status(500).send({message: `Error finding worker id: ${err}`});
//             worker.remove(err => {
//                 if(err) res.status(500).send({message: `Error REMOVING worker: ${err}`});
//                 res.status(200).send({message: "Worker SUCCESFULLY removed"})
//             })
//     })
// })
// app.put("/workers/:workerId", (req, res) =>{
//     let workerId = req.params.workerId;
//     let updateBody = req.body;

//     workers.findByIdAndUpdate(workerId, updateBody, (err, workerUpdated) => {
//         if(err) res.status(500).send({message: `Error finding -EEESEESYO- ID to update: ${err}`});
//         res.status(200).send({updatedData: updateBody})
//     })
// })
// app.put("/users/:userId", (req,res) => {
//     let userId = req.params.userId;
//     let updateBody = req.body;

//     users.findByIdAndUpdate(userId, updateBody, (err,userUpdated) => {
//         if(err) res.status(500).send({message: `error on Finding id to UPDATE: ${err}`}); 
//         res.status(200).send({newUserData: userUpdated})
//     })

// })

module.exports = app;