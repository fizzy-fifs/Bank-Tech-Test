class Account{
  constructor(){
    this.balance = 0
    this.transactions = []
  }

  deposit(amount){
    const deposit = {date: todaysDate(), credit: "credit", amount: amount, debit: ""}
    this.transactions.push(deposit)
    this.balance += amount
  }

  withdraw(amount){
    if (amount > this.balance){
      try{
        throw new Error("Insufficient Funds")
      } catch (e){
        return e.message
      }
    } else {
      const withdrawal = {date: todaysDate(), debit:"debit", amount: amount, credit:""}
      this.transactions.push(withdrawal)
      this.balance -= amount
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