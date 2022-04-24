
const formElement = document.getElementById("saveTransaction")

formElement.addEventListener("submit", (event)=>{
    event.preventDefault()
    let transactionDescription = document.getElementById("transactionDescription").value
    let transactionPrice =  document.getElementById("transactionPrice").value
// console.log(transactionDescription,transactionPrice)
const transaction = { transactionDescription, transactionPrice}
const transactionJson = JSON.stringify(transaction)
// console.log(transactionJson)

fetch('http://localhost:3000/transactions', {
    method:'Post',
    body: transactionJson
})
.then(alert("Transaccion exitosa"))
})


fetch("http://localhost:3000/transactions", { // se renderiza cada vez que recargo la pág
    method:"Get"
})
.then(x=> x.json()).then(console.log)