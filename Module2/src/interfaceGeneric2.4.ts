{
  // generic interface
  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      ram: string;
    };
    smartWatch: T;
  }
  //
  const RichDev: Developer<{
    brand: string;
    battary: string;
  }> = {
    name: "sayed",
    computer: {
      brand: "Mac",
      ram: "1 TB",
    },
    smartWatch: {
      brand: "IWatch",
      battary: "100mh",
    },
  };
  //
  const PoorDev: Developer<{
    brand: string;
    battary: string;
    heartTrack: boolean;
  }> = {
    name: "sayed",
    computer: {
      brand: "Mac",
      ram: "1 TB",
    },
    smartWatch: {
      brand: "IWatch",
      battary: "100mh",
      heartTrack: false, //extra property can type added
    },
  };
  //

  // ---------- Combination of all

  interface User<A, C> {
    name: string;
    address: A;
    phone?: number;
    connection: C;
  }
  type Address1 = {
    city: string;
    presentAd: string;
  };
  type Address2 = {
    city: string;
    ParmanentAd: string;
  };
  interface Connection1 {
    relativeFrnds: boolean;
    nearby: boolean;
    educationLife: boolean;
  }
  interface Connection2 {
    facebook: boolean;
    insta: boolean;
  }

  const IamUser1: User<Address1, Connection1> = {
    name: "sayed",
    address: {
      city: "feni",
      presentAd: "pathan",
    },
    connection: {
      relativeFrnds: true,
      nearby: false,
      educationLife: true,
    },
  };
  const IamUser2: User<Address2, Connection2> = {
    name: "sayed",
    address: {
      city: "feni",
      ParmanentAd: "loskor",
    },
    connection: {
      facebook: true,
      insta: false,
    },
  };
}
