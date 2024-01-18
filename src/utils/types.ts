export type Country = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: any;
  };
  capital: string[];
};

export const countryInitalState: Country = {
  flags: {
    png: "",
    svg: "",
    alt: "",
  },
  name: {
    common: "",
    official: "",
    nativeName: {},
  },
  capital: [""],
};
