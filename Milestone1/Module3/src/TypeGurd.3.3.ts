{
  // Type Gurds

  // Typeof --> type gurd
  type AlphaNumeric = number | string;
  const add = (par1: AlphaNumeric, par2: AlphaNumeric): AlphaNumeric => {
    if (typeof par1 === "number" && typeof par2 === "number") {
      return par1 + par2;
    } else {
      return par1.toString() + par1.toString();
    }
  };
  // In gurd
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: string;
  };
  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`I am ${user.role}`);
    } else {
      console.log(`I am normal user`);
    }
  };
  getUser({ name: "sayed", role: "admin" });
}
