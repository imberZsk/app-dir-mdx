/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.mdx'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem'
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            p: { 'margin-top': '1em', 'margin-bottom': '0.6em' },
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`
              },
              code: { color: theme('colors.primary.400') }
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight')
            },
            h3: {
              fontWeight: '600'
            },
            code: {
              color: theme('colors.indigo.500')
            },
            img: {
              'margin-top': '0.6em',
              'margin-bottom': '0.6em'
            }
          }
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`
              },
              code: { color: theme('colors.primary.400') }
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100')
            }
          }
        }
      })

      // typography: {
      //   DEFAULT: {
      //     css: {
      //       'h2, h3, h4, h5, ul, ol': {
      //         'margin-top': '1em',
      //         'margin-bottom': '0.6em'
      //       },
      //       'p, pre, blockquote': {
      //         'margin-top': '0.6em',
      //         'margin-bottom': '0.6em'
      //       },
      //       pre: {
      //         background: 'var(--pre)'
      //       },
      //       li: {
      //         'margin-top': '0px',
      //         'margin-bottom': '0px'
      //       },
      //       'li > p, li > ul, li > ol ': {
      //         'margin-top': '0px',
      //         'margin-bottom': '0px'
      //       },
      //       hr: {
      //         'margin-top': '1em',
      //         'margin-bottom': '1em'
      //       },
      //       img: {
      //         'margin-top': '0.6em',
      //         'margin-bottom': '0.6em'
      //       }
      //     }
      //   }
      // }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
