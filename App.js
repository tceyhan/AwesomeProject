import { View, Text } from 'react-native'
import React from 'react'
import Router from './src/Router'
import {ToastComp} from './src/components/Toast/ToastComp';

const App = () => {
  return (
    <>
      <Router />
      <ToastComp />
    </>
  )
}

export default App