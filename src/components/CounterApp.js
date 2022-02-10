import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decrease, increase} from '../reducers/countReducer';

const CounterApp = () => {
  const count = useSelector(state => state.counter.counter);

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase());
    console.log('hello');
  };

  const handleDecrease = () => {
    dispatch(decrease());
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'steelblue',
          marginTop: 150,
        }}>
        <Text
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            fontSize: 100,
          }}>
          {count}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 100}}>
        <Button title="+1" color="black" onPress={handleIncrease}></Button>
        <Button title="-1" color="black" onPress={handleDecrease}></Button>
      </View>
    </View>
  );
};

export default CounterApp;
