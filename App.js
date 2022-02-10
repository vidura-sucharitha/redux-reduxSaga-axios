import React, {useState} from 'react';
import CounterApp from './src/components/CounterApp';
import ApiComponent from './src/components/APIComponenent';
import store from './src/configStore';
import {Provider} from 'react-redux';
import {Button, ScrollView, Text} from 'react-native';
import {getUser} from './src/reducers/userReducer';
import {useDispatch, useSelector} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <ScrollView>
        {/* <CounterApp /> */}

        <ApiComponent />
      </ScrollView>
    </Provider>
  );
};

export default App;
