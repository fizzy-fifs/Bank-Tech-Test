class Account{
  constructor(){
    this.balance = 0
    this.transactions = [] 
  }

  deposit(amount){
    this.balance += amount
    const deposit = {date: todaysDate(), credit:amount.toFixed(2), debit: "", balance: this.balance.toFixed(2)}
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
      const withdrawal = {date: todaysDate(), debit:amount.toFixed(2), credit:"", balance: this.balance.toFixed(2)}
      this.transactions.push(withdrawal)
    } 
  }

  printStatement(){
    console.log("date || credit || debit || balance")
    this.transactions.reverse().forEach(t => console.log(`${t.date} ||  ${t.credit} || ${t.debit} || ${t.balance}`))
  }
}

//todaysDate() function retrieves date in the desired format

let todaysDate = () => {
  let today = new Date(); 
  let day = today.getDate()
  let month = today.getMonth() + 1
  let year = today.getFullYear()
  let date = `${day}/${month}/${year}`
  return date
}