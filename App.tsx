import React from 'react'
import StorybookUI from './storybook'
/* import { LOAD_STORYBOOK } from '@env' */

import Router from './src/router'
import theme from './src/styles/theme'
import { ThemeProvider } from 'styled-components/native'

const LOAD_STORYBOOK = 'true'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

const StoryBook = () => {
  return (
    <ThemeProvider theme={theme}>
      <StorybookUI />
    </ThemeProvider>
  )
}

export default LOAD_STORYBOOK === 'true' ? StoryBook : App
