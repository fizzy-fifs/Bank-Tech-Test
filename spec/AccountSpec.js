'use strict'
describe("Account", () => {
  // todaysDate() function allows the test to run using today's date in the desired format
  let todaysDate = () => {
    let today = new Date(); 
    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()
    let date = `${day}/${month}/${year}`
    return date
  }

  let account;
  let i;
  let amount1;
  let amount2;
  let amount3;

  
  beforeEach(()=>{
    account = new Account
    spyOn(window.console, 'log')
    amount1 = 100
    amount2 = 50
    amount3 = 150
  })
  
  it("has a default balance of 0", () => {
    expect(account.balance).toEqual(0)
  })

  it("can increase the balance", () => {
    account.deposit(amount1)
    expect(account.balance).toEqual(amount1)
  })

  it("can decrease the balance", () => {
    account.deposit(amount1)
    account.withdraw(amount2)
    expect(account.balance).toEqual(amount1 - amount2)
  })

  it("users can not withdraw more than their balance", () => {
    account.deposit(amount1)
    expect(account.withdraw(amount3)).toEqual("Insufficient Funds")
  })

  // Storing each transaction

  it("transactions starts as an empty array", () => {
    expect(account.transactions).toEqual([])
  })
  
  it("records each deposit", () => {
    account.deposit(amount1)
    expect(account.transactions).toEqual([{date:todaysDate(), credit: amount1.toFixed(2), debit:"", balance:amount1.toFixed(2)}])
  })

  it("records each withdrawal", () => {
    account.deposit(amount1)
    account.withdraw(amount2)
    expect(account.transactions[1]).toEqual({date:todaysDate(), debit:amount2.toFixed(2), credit:"", balance:(amount1 - amount2).toFixed(2)})
  })

  it("has a history of all transactions", () => {
    for(i=0; i<4; i++){
    account.deposit(amount1)
    account.withdraw(amount2)
    }
    expect(account.transactions.length).toEqual(8)
    expect(account.transactions[4]).toEqual({date:todaysDate(), credit:amount1.toFixed(2), debit:"", balance:(amount1*3 - (amount2*2)).toFixed(2)})
    expect(account.transactions[7]).toEqual({date:todaysDate(), debit:amount2.toFixed(2), credit:"", balance:(amount1*4 - (amount2*4)).toFixed(2)})
  })

  // Displaying statement on the console in the desired format

  it("displays a header in the statement ", () => {
    account.printStatement()
    expect(window.console.log).toHaveBeenCalled()
    expect(window.console.log).toHaveBeenCalledWith("date || credit || debit || balance")
  })

  it("displays the statement in the desired format on the console", () => {
    account.deposit(100)
    account.printStatement()
    expect(window.console.log).toHaveBeenCalled()
    expect(window.console.log).toHaveBeenCalledWith("date || credit || debit || balance") && (`${todaysDate()}` + " ||" + " 100.00" + " ||" + " " + "|| 100.00")
  })

  it("displays the statement in the desired format on the console", () => {
    account.deposit(100)
    account.withdraw(20)
    account.printStatement()
    expect(window.console.log).toHaveBeenCalled()
    expect(window.console.log).toHaveBeenCalledWith
      ("date || credit || debit || balance") &&
      (`${todaysDate()}` + " ||" + " 100.00" + " ||" + " " + "|| 100.00") &&
      (`"${todaysDate()} || || 20.00 || 80.00"`)
  })
})