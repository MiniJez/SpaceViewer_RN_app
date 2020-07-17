import 'react-native-gesture-handler';
import React from 'react';
import MainNavigator from './src/navigation'
import { Provider } from 'react-redux';
import store from './src/redux'

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App