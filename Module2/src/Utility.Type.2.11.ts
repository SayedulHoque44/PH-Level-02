{
  // Utility - Pick + Omit + Parital + Required + Readonly + Record

  type Person = {
    name: string;
    age: number;
    email?: string;
    contact: string;
  };
  // Pick -- specific kono property newar jonno kono object type theke
  type PersonNameAge = Pick<Person, "name" | "age">;
  const personNameAge: PersonNameAge = { name: "sa", age: 34 };

  // Omit -- specific kono property bad diye baki gula newar jonno
  type PersonEmailContact = Omit<Person, "name" | "age">;
  type PersonGeneric<T> = Omit<Person, keyof T>;
  const personEmailContact: PersonEmailContact = {
    email: "dd",
    contact: "sdf",
  };
  const personGeneric: PersonGeneric<{ name: string; email: string }> = {
    age: 34,
    contact: "dd",
  };

  //Partial -- ata sob gula property ke optional banay dey
  type PersonPartial = Partial<Person>;
  type PersonRequired = Required<Person>; // now optional email also become required

  //ReadOnly
  type PersonReadOnly = Readonly<PersonNameAge>;
  const personReadOnly: PersonReadOnly = { name: "ss", age: 45 };
  //personReadOnly.contact = 'cannot cng'

  //Record -- unknown obj er khetre atai use kra ucit
  type Myobj = Record<string, unknown>; // object er key er typw ta string as usually and value er type unknown
  const anyObj: Myobj = {
    name: "s",
    age: 34,
  };
}
