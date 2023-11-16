{
  // -----------genericFn

  //   normal type for function
  type User = (params: { name: "sayed" }) => number;
  const test: User = (params) => 10;
  test({ name: "sayed" });

  //generic
  type StudentT = { name: string; roll: number };
  const createStudent = <T>(params: T): T[] => {
    return [params];
  };
  createStudent<StudentT>({ name: "sayed", roll: 45 });
  // pass generic and return interface + constraints
  type StudentT3 = {
    name: string;
    roll: number;
    age: number;
  };
  interface StudentWithCourse extends StudentT {
    course: string;
  }
  const createStudent2 = <T extends { name: string; roll: number }>(
    params: T
  ): StudentWithCourse => {
    return { name: "sayed", roll: 45, course: "PH" };
  };
  createStudent2<StudentT3>({ name: "sayed", roll: 45, age: 56 });
  createStudent2({ name: "almun", roll: 45, extra: "..ss" }); // must be have to name and roll which is extened
}
