class BankAccount {
  constructor(initialBalance) {
    this.initialBalance = initialBalance;
    this.currentBalance = initialBalance;
    this.withdrawls = bills || [0.00];
    this.deposits = deposits || [0.00];
    this.totalWithdrawl = 0.00;
    this.totalDeposit = 0.00;
  }
  totalDeposits() {
    for (var i = 0; i < this.deposits.length; i++) {
      this.totalDeposit += this.deposits[i];
    }
    return this.totalDeposit;
  }
  totalWithdrawls() {
    for (var i = 0; i < this.withdrawls.length; i++) {
      this.totalWithdrawl += this.withdrawls[i];
    }
    return this.totalWithdrawl;
  }
  currentBalances() {
    this.currentBalance = this.currentBalance + this.totalDeposit + this.totalWithdrawl;
    return this.currentBalance;
  }
  addDeposit(deposit) {
    this.withdrawls.push(deposit)
  }
  addWithdrawl(withdrawl){
    this.withdrawls.push(withdrawl)
  }
}
let initialBalance = 1000
let bills = [-45, -99.95, -34.43]
let deposits = []

let account = new BankAccount(initialBalance)
console.log(account.currentBalances())
console.log(account.totalWithdrawls())
console.log(account.totalDeposits())
console.log(account.currentBalances())
