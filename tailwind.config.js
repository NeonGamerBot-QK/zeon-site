/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [ require("@catppuccin/tailwindcss")({
    // prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
    // default is `false`, which means no prefix
   prefix: "ctp",
    // which flavour of colours to use by default, in the `:root`
    defaultFlavour: "mocha",
  })
  , require('daisyui')
],
daisyui: {
  themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  // darkTheme: "dark", // name of one of the included themes for dark mode
  base: false, // applies background color and foreground color for root element by default
  styled: true, // include daisyUI colors and design decisions for all components
  utils: true, // adds responsive and modifier utility classes
  prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
  logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  themeRoot: ":root", // The element that receives theme color CSS variables
},
}

