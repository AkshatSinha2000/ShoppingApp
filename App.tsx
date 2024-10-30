import React from 'react';
import {SafeAreaView} from 'react-native';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { StackNavigation } from './src/navigation';


function App(){
  return (
    <Provider store={store}>
      <StackNavigation/>
    </Provider>
  );
}

export default App;
