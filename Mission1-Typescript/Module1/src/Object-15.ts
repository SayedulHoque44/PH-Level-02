// Reference type --> Object

const user: {
  readonly position: "CEO"; // CEO fixed value
  firstName: string;
  middleName?: string; // ? optinally
  lastName: string;
  age: undefined | string;
} = {
  position: "CEO",
  firstName: "sayeds",
  lastName: "hoque",
  age: undefined,
};

// user.position = "cng"// its readonly
