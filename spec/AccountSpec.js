'use strict'
describe("Account", () => {
  let account;
  let i;
  beforeEach(()=>{
    account = new Account
  })
  
  it("has a default balance of 0", () => {
    expect(account.balance).toEqual(0)
  })

  it("can increase the balance", () => {
    account.deposit(100)
    expect(account.balance).toEqual(100)
  })

  it("can decrease the balance", () => {
    account.deposit(100)
    account.withdraw(5)
    expect(account.balance).toEqual(95)
  })

  it("users can not withdraw more than their balance", () => {
    account.deposit(100)
    expect(account.withdraw(150)).toEqual("Insufficient Funds")
  })

  // Storing each transaction

  it("transactions starts as an empty array", () => {
    expect(account.transactions).toEqual([])
  })
  
  it("records each deposit", () => {
    account.deposit(100)
    expect(account.transactions).toEqual([{date:"2/6/2021", credit:"credit", amount:100, debit:""}])
  })

  it("records each withdrawal", () => {
    account.deposit(100)
    account.withdraw(50)
    expect(account.transactions[1]).toEqual({date:"2/6/2021", debit:"debit", amount:50, credit:""})
  })

  it("has a history of all transactions", () => {
    for(i=0; i<4; i++){
    account.deposit(100)
    account.withdraw(50)
    }
    expect(account.transactions.length).toEqual(8)
    expect(account.transactions[4]).toEqual({date:"2/6/2021", credit:"credit", amount:100, debit:""})
    expect(account.transactions[7]).toEqual({date:"2/6/2021", debit:"debit", amount:50, credit:""})
  })

  // Displaying statement on the console in the desired format

 
})