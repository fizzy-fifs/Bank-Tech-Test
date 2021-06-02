'use strict'
describe("Account", () => {
  let account;
  beforeEach(()=>{
    account = new Account
  })
  
  it("has a default balance of 0", () => {
    expect(account.balance).toEqual(0)
  })

  it("can increase the balance", () => {
    account.deposit(5)
    expect(account.balance).toEqual(5)
  })

  it("can decrease the balance", () => {
    account.deposit(100)
    account.withdraw(5)
    expect(account.balance).toEqual(95)
  })

  it("users can not withdraw more than their balance", () => {
    account.deposit(10)
    expect(account.withdraw(15)).toEqual("Insufficient Funds")
  })

  
})