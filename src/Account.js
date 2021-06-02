class Account{
  constructor(){
    this.balance = 0
    this.transactions = []
  }

  deposit(amount){
    
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
      this.balance -= amount
    }
    
  }

  
}

