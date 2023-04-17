/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx",
            "./components/**/*.tsx",
            "./employer-components/**/*.tsx",
            "./worker-components/**/*.tsx"
            
          ],
  theme: {
    extend: {
      colors: {
        'BgPrimary' : '#3aafa9',
        'BgSecondary' : '#2b7a77',

        'titlePrimary' : '#ffffff',
        
        'btnPrimary' : '#17242a',
        'btnSecondary' : '#def2f1'

      }
    },
  },
  plugins: [],
}

