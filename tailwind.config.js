/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:false,
  theme: {
    extend: {
     fontFamily :{
      sans : ['Inter var' , ...defaultTheme.fontFamily.sans],
     }
    },
  },
  variants : {
    extends : {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};
