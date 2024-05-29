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
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",  flowbite.content()],
//   theme: {
//     extend: {},
//   },
//   plugins: [flowbite.plugin()],
// };
