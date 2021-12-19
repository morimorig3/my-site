module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        twitter: '#55acee',
        github: '#24292e',
        qiita: '#55c500',
        javascript: 'rgba(236,216,77,1)',
        typescript: 'rgba(63,116,186,1)',
        react: 'rgba(128,216,247,1)',
        html: 'rgba(225,109,60,1)',
        css: 'rgba(82,150,240,1)',
        node: 'rgba(143,196,72,1)',
        sass: 'rgba(179,100,139,1)',
      },
      fontFamily: {
        righteous: ['Righteous', 'cursive'],
        Rubik: ['Rubik', 'sans-serif'],
      },
      boxShadow: {
        all: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
