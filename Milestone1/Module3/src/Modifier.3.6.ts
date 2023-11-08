{
  // Access Modifier Part 2

  class BankAccount {
    readonly id: number;
    public name: string;
    protected _balance: number;
    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }
    addDeposit(amount: number) {
      this._balance += amount;
    }
    getbalance() {
      return this._balance;
    }
  }
  //

  const goribManusherAccount = new BankAccount(111, "gorib", 20);
  goribManusherAccount.addDeposit(10);
  console.log(goribManusherAccount.getbalance());
}
