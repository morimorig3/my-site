module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        twitter: '#55acee',
        github: '#24292e',
        qiita: '#55c500',
      },
      fontFamily: {
        righteous: ['Righteous', 'cursive'],
      },
    },
  },
  variants: {
    margin: ['last'],
    extend: {},
  },
  plugins: [],
};
