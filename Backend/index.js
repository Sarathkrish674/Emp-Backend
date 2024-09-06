//1.importing express
const express = require('express')
require("./connection")
var empModel =require("./model/employee")
var cors  =require("cors")

//2.initialize
const app = new express()

// mid
app.use(express.json())
app.use(cors())
    

//3.Api creation
app.get('/',(req,res)  =>{
    res.send("Message from the server")

})
app.get('/trial',(req,res)  =>{
    res.send("trial me")

})




// add api
app.post("/add",async(req,res)=>{
try{
    await empModel(req.body).save();
    res.send({message:"data added!!"})

}catch (error) {
    console.log(error)

}
})
app.get("/find" ,async (req, res)=>{
    try{
        var show =await empModel.find();
        res.send(show)
    }
    catch (error){
        console.log(error)
    }
})
    // to delete
app.delete("/remove/:id",async (req, res)=>{
    try {
        await empModel.findByIdAndDelete(req.params.id) 

        res.send({ message: "data deleted!!" })
    }
      catch(error){
    console.log(error);
}
})
// update
app.put("/edit/:id",async (req, res)=> {
    try {
        var data = await empModel.findByIdAndUpdate(req.params.id,req.body);
        res.send({ message: 'update successfully',data })
    }
      catch (error){
    console.log(error)
      }
    })


    //4.port
app.listen(3004,()=>{
    console.log("port is running")

})