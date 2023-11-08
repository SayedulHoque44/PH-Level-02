{
  type singleType = number[] | string | number | { role: number };
  interface itsObjType {
    name: string;
    role: number;
  }

  // type
  type TUserValue1 = {
    name: string;
  };
  type TUserValue2 = {
    role: number;
  };
  type TStudent = TUserValue1 & TUserValue2; // system of extend in type
  const student1: TStudent = {
    name: "sa",
    role: 90,
  };
  //interface
  interface IUserValue1 {
    name: string;
  }
  interface IStudent extends IUserValue1 {
    role: number;
  }
  const student2: IStudent = {
    name: "sa",
    role: 40,
  };
  //   complex in interface with single type declaration //-- Tips: interface better for object data
  type arr = number[];
  interface arr2 {
    [index: number]: number;
  }
  interface arr3 {
    [index: number]: number | string;
  }
  const Arr: arr2 = [12, 34, 35];
  const Arr3: arr3 = [12, 34, "str", "str"];
}
