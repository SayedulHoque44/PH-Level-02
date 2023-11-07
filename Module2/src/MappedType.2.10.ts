{
  // Mapped type - looping
  type AreaString = {
    [key in "height" | "width"]: string; //[height in "height"|"width"]:string -- ebabe width o looping krbe joto gula key ache
  };
  type AreaString2 = {
    [key in keyof { height: "s"; width: "r" }]: string; // keyof take the key as like - "height" | width""
  };
  //
  type DynamicType<T> = {
    [key in keyof T]: T[key]; //
  };
  interface Area {
    width: string;
    height: string;
    depth: number;
  }
  const area: DynamicType<Area> = {
    width: "10 vw",
    height: "50 vh",
    depth: 34,
  };
}
