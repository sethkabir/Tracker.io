module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#1a1819',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
