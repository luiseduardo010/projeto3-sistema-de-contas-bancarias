const BankAccount = require('./BankAccount')

class SavingsAccount extends BankAccount{
    constructor(accountHolder, interestRate) {
        super(accountHolder)
        this.interestRate = interestRate
        this.balance = 1000
    }

    applyInterest() {
        this.balance *= (1 + this.interestRate / 100)
        console.log(`Saldo total com ${this.interestRate}% de juros: ${this.balance.toFixed(2)}`)
    }
}

module.exports = SavingsAccount