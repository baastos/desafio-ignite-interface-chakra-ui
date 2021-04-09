import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
    colors: {
      yellow: {
        300: '#FFBA0850',
        500: '#FFBA08',
      },
      brand: {
        50: "white",
        100: "#F5F8FA",
        500: "#999999",
        700: "#47585B",
        900: "#1a202c",
      },
    },
    fonts: {
      heading: 'Poppins',
      body: 'Poppins',
    },
    styles:{
      global: (props) => ({
        ".swiper-button-next": {
          right: 5,
          _after: {
            color: "yellow.500"
          }
        },
        ".swiper-button-prev": {
          left: 5,
          _after: {
            color: "yellow.500"
          }
        },
        ".swiper-pagination-bullet":{
          width:  "4",
          height: "4",
          bg: "#999999",
          opacity: 0.9
        },

       ".swiper-pagination-bullet-active": {
         bg: "yellow.500"
       }
      })
    }
    
})


