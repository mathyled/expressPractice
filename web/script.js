const formElement = document.getElementById("saveTransaction")

formElement.addEventListener("submit", (event)=>{
    event.preventDefault()
    let transactionDescription = document.getElementById("transactionDescription").value
    let transactionPrice =  document.getElementById("transactionPrice").value
// console.log(transactionDescription,transactionPrice)
const transaction = { transactionDescription, transactionPrice}
const transactionJson = JSON.stringify(transaction)
console.log(transactionJson)
})
