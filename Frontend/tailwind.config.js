import daisyui from "daisyui";

// ! DaisyUI
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};

// ! Flowbite
// import { require } from "esm";
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/lib/esm/**/*.js"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("flowbite/plugin")],
// };
