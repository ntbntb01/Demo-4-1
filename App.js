import React from 'react'
import { View, Text } from 'react-native'
import MainAppRoutes from './src/Navigation/routes'

import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducer from './src/reducer'

let store = createStore(allReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MainAppRoutes />
    </Provider>
  )
}