class Account{
  constructor(){
    this.balance = 0
    this.transactions = []
  }

  deposit(amount){
    this.balance += amount
    const deposit = {date: todaysDate(), credit: "credit", amount: amount, debit: "", balance: this.balance}
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
      const withdrawal = {date: todaysDate(), debit:"debit", amount: amount, credit:"", balance: this.balance}
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