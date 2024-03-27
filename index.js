const express = require("express");
const app = express();
const db = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

app.use(cors())

db.connect(
    `mongodb+srv://admin:caiTl6SFNcztQIUP@cluster0.9mti9yz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log('Veritabanına başarıyla bağlandı');
}).catch((err) => {
    console.error('Veritabanına bağlanırken hata oluştu:', err);
});



const productsRouter= require("./routes/product");

const isLoggedIn=true;

app.use((req,res,next)=>{
    if(!isLoggedIn){
        res.send("Giriş yapmanız Lazım !")}
        next();
})
app.use(bodyParser.json());
app.use("/products",productsRouter);

app.use("/",(req,res)=>{   
    res.status(200).send("Merhaba !")
})

app.listen(5000,()=>{
console.log("Server is running on port 5000")
})