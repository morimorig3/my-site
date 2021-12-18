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
