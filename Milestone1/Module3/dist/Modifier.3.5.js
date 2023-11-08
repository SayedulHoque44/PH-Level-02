"use strict";
{
    // Access Modifier
    //   public --> by defult all in public and its able in every where
    //   Protected --> only able in own class also child class
    //   Private --> only able in own class
    class BankAccount {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        addDeposit(amount) {
            this._balance += amount;
        }
        getbalance() {
            return this._balance;
        }
    }
    //
    class StudentAccount extends BankAccount {
        test() {
            return this._balance;
        }
    }
    const goribManusherAccount = new BankAccount(111, "gorib", 20);
    goribManusherAccount.addDeposit(10);
    console.log(goribManusherAccount.getbalance());
}
