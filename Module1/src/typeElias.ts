{
  // type elias - type name ={props:value;}
  type Student = { name: string; age: number };

  const student1: Student = {
    name: "sayed",
    age: 34,
  };
  const student2: Student = {
    name: "sayed",
    age: 34,
  };
  const student3: Student = {
    name: "sayed",
    age: 34,
  };
  //
  type IsAdmin = boolean;
  const isAdmin: IsAdmin = true;

  //Funciton
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
  //
  // Intersection(&) and union(|)
  //   union |
  type Student4 = "Good student" | "Bad student";
  const student4: Student4 = "Good student";

  //intersection &
  type FrontendDeveloper = {
    skils: string[];
    designation1: "frontendDeveloper";
  };
  type BackendDeveloper = {
    skils: string[];
    designation2: "BackendDeveloper";
  };
  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    skils: ["html", "css", "node"],
    designation1: "frontendDeveloper",
    designation2: "BackendDeveloper",
  };
}
