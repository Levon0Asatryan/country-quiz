/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      gray95: "#f2f2f2",
      primary: "#2F527B",
      answer: "#898ddc",
      hover: "#F9A826",
      blue: "#1D355D",
      green: "#6FCF97",
    },
    extend: {
      height: {
        90: "90%",
        95: "95%",
        116: "116px",
      },
      width: {
        standart: "464px",
        116: "116px",
        162: "162px",
        84: "84px",
        360: "360px",
        400: "400px",
      },
      lineHeight: {
        "leading-11": "54px",
      },
      minHeight: {
        515: "515px",
        400: "400px",
      },
    },
  },
  plugins: [],
};
