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

export type Question = {
  isItCapitalQuestion: boolean;
  text: string;
  flag?: {
    alt: string;
    svg: string;
  };
  answers: Answer[];
};

export const questionInitalState = {
  isItCapitalQuestion: true,
  text: "",
  answers: [{ answer: "", isItRight: true }],
};

export type Answer = { answer: string; isItRight: boolean };
