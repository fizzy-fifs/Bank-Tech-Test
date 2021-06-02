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
})