var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))


//create express ap
const path = require("path")



//connect angular app with express server
app.use(express.static(path.join(__dirname, './dist/srgauni/')))
//Databse connection
mongoose.connect('mongodb://localhost:27017/srgaunidb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Succesfully Connected to Database"))

app.post("/createuser",(req, res, next) => {
   
    let data=req.body;
    console.log(data)
    db.collection('vendors').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('C:\Users\tony\srgauni\success.html')

})
app.post("/createinfluencers",(req, res, next) => {
   
    let data=req.body;
    console.log(data)
    db.collection('influencers').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully for influencers");
    });

    return res.redirect('C:\Users\tony\srgauni\success.html')

})

app.get("/getuser", (req, res, next) => {
      
    let userObj =  db.collection('users').find().toArray()
    res.send({ message: userObj })

        
})

//assign port
const port=4200
app.listen(port, () => console.log(`server on ${port}...`))

