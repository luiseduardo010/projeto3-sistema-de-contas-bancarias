const SavingsAccount= require('./SavingsAccount')
const BankAccount = require('./BankAccount')

const userAccount = new BankAccount('Luis')
userAccount.deposit(300)
userAccount.withdraw(100)

const jurosAccount = new SavingsAccount('João', 4)
jurosAccount.applyInterest()
jurosAccount.withdraw(900)