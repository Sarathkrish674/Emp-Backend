
var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sasidharansarathkrishna:sarathkrishna@cluster0.txh4s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() =>{
 console.log("db connected")


})
.catch((err) =>{
    
    console.log(err)

})
