import React from 'react'

const themepak = {
  theme: {
    colors: {
      primary: '#1A202C',
      secondary: '#666666',
      bg: '#CBD5E0',
      blue: '#073476C4',
      red: 'rgb(221,21,21)',
      white: '#ffffff',
      gray: 'rgba(0, 0, 0, 0.24)',
    },
  },
}

const ThemeState = React.createContext(themepak.theme)

export const useTheme = () => {
  const context = React.useContext(ThemeState)
  return context
}
