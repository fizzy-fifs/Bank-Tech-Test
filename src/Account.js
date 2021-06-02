class Account{
  constructor(){
    this.balance = 0
    this.transactions = []
  }

 

  deposit(amount){
    const deposit = {date: todaysDate(), type: "credit", amount: amount}
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
      const withdrawal = {date: todaysDate(), type:"debit", amount: amount}
      console.log(withdrawal)

      this.transactions.push(withdrawal)
      console.log(this.transactions)
      
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