import React from 'react'
import { DarkModeContext } from './ThemeContext'
import Button from '@material-ui/core/Button'

const DarkToggle = () => {
  const darkMode = React.useContext(DarkModeContext)

  return (
    <Button
      aria-label="Toggle dark mode"
      color="inherit"
      onClick={darkMode.toggle}
    >
      TOGGLE
    </Button>
  )
}

export default DarkToggle
