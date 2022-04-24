const express = require("express")
const cors = require("cors")

const app = express()
const port = 3000



app.get("/transactions",(req,res) =>{
    res.send("Me hcieron un get")
})

app.post("/transactions", (req,res) =>{
    res.send("Me hicieron un post")
})


app.listen(port, ()=>{
    console.log(`Estoy ejecutandome en http://localhost:${port}`)
})