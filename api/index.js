const express = require("express")
const cors = require("cors")

const app = express()
const port = 3000

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json({
    type:"*/*"
}))

app.use(cors())


let transactions = [];


// get a http://localhost:3000/transactions
app.get("/transactions",(req,res) =>{
    // console.log(transactions)
    res.send(JSON.stringify(transactions))
})

app.post("/transactions", (req,res) =>{
   
  let transaction = req.body;
  transactions.push(transaction)
  console.log(transactions)
})


app.listen(port, ()=>{
    console.log(`Estoy ejecutandome en http://localhost:${port}`)
})