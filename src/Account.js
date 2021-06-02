class Account{
  constructor(){
    this.balance = 0
    this.transactions = []
    
  }

  

  deposit(amount){
    // amount = amount.toFixed(2)
    
    this.balance += amount
    console.log(this.balance)

    const deposit = {date: todaysDate(), credit: amount, debit: "", balance: this.balance}
    this.transactions.push(deposit)
  }

  withdraw(amount){
    if (amount > this.balance){
      try{
        throw new Error("Insufficient Funds")
      } catch (e){
        return e.message
      }
    } else {
      this.balance -= amount
      const withdrawal = {date: todaysDate(), debit:amount, credit:"", balance: this.balance}
      this.transactions.push(withdrawal)
    } 
  }

 
}

let todaysDate = () => {
  let today = new Date(); 
  let day = today.getDate()
  let month = today.getMonth() + 1
  let year = today.getFullYear()
  let date = `${day}/${month}/${year}`
  return date
}