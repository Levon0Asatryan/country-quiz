import { Country } from "./types";

export const getCountries = async (): Promise<Country[]> => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,flags"
  );
  const json = await res.json();
  return json;
};
