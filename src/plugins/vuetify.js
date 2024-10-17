
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'customTheme', // Set the default theme to dark
    themes: {
      customTheme: {
        colors: {
          primary: '#732c4e', // Your top-right gradient color
          secondary: '#131430', // Your bottom-left gradient color
          accent: '#ff69b4', // Playful accent color
          error: '#ff5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
          // background: 'linear-gradient(to top right, #131430, #732c4e)', // Gradient background
          background: '#131430'
        }
      },
    },
    options: {
      customProperties: true, // Allows theme colors to be used in CSS
      variations: false
    }
  }
})
