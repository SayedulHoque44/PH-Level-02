{
  // Access Modifier
  //   public --> by defult all in public and its able in every where
  //   Protected --> only able in own class also child class
  //   Private --> only able in own class
  class BankAccount {
    readonly id: number;
    public name: string;
    private _balance: number;
    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }
    addDeposit(amount: number) {
      this._balance += amount;
    }
    private getbalance() {
      return this._balance;
    }
    getSecuredBalace() {
      return this.getbalance();
    }
  }
  //
  class StudentAccount extends BankAccount {
    balance() {
      return this.getSecuredBalace(); // encaptulation - get more secure- akta jaygay aboddo rakah kono jinis ke mane bahirer world e ata open na hy- mane onk secure layer dewa jabe
    }
  }

  const goribManusherAccount = new StudentAccount(111, "gorib", 20);
  goribManusherAccount.addDeposit(10);
  console.log(goribManusherAccount.balance());
}
