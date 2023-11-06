{
  // Conditional Type
  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };
  //   keyof Sheikh = bike | car | ship | plane
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false; // T eta Sheikh er key er modde ache kina
  type CheckVehicleReverse<T> = keyof Sheikh extends T ? true : false; //
  type hasPLane = CheckVehicle<"plane">; // plane extends keyof (Sheikh) bike | car | ship | plane ? true : false
  type hasTractor = CheckVehicle<"tarctor">;
  type hasVehicle = CheckVehicleReverse<keyof Sheikh>;
}
