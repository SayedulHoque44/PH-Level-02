{
  //Getter Setter

  class BankAccount {
    readonly id: number;
    public name: string;
    protected _balance: number;
    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }
    // public addDeposit(amount: number) {
    //   this._balance += amount;
    // }
    set deposit(amount: number) {
      this._balance += amount;
    }

    // public getbalance() {
    //   return this._balance;
    // }
    get Balance() {
      return this._balance;
    }
  }
  //

  const goribManusherAccount = new BankAccount(111, "gorib", 20);
  // goribManusherAccount.addDeposit(10);
  goribManusherAccount.deposit = 10; // we are able to send paramerter as a property value
  // console.log(goribManusherAccount.getbalance());
  const myBalance = goribManusherAccount.Balance; // () mane call kora lagtecena
}
