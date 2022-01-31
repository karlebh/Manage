module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
        extend: {
            fontFamily: {
                // new: ['Barlow', 'Fraunces', 'Nunito'],
                barlow: 'Barlow',
                fraunces: 'Fraunces',
                nunito: 'Nunito',
            },
            colors: {
              'bright-red': 'hsl(12, 88%, 59%)',
              'dark-blue': {
                100: 'hsl(228, 39%, 23%)',
                200: 'hsl(233, 12%, 13%)'
              },
              'gray-blue': 'hsl(227, 12%, 61%)',
              'pale-red': 'hsl(13, 100%, 96%)',
            }
        },
    },

  plugins: [],
}