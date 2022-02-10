import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../reducers/userReducer';

const ApiComponent = () => {
  const users = useSelector(state => state.user.user);

  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(getUser());
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      {users !== undefined ? (
        users.map((user, index) => (
          <View key={index}>
            <Text>user ID:{user.userId}</Text>
            <Text>ID:{user.id}</Text>
            <Text>Title:{user.title}</Text>
            <Text>Completed:{String(user.completed)}</Text>
            <Text>
              Index:{index}
              {'\n'}
            </Text>
          </View>
        ))
      ) : (
        <View>
          <Text>No records</Text>
        </View>
      )}
      {/* <Text>user ID:{user.userId}</Text>
      <Text>ID:{user.id}</Text>
      <Text>Title:{user.title}</Text>
      <Text>Completed:{String(user.completed)}</Text> */}
      <Button title="Click Me" onPress={onClickHandler} />
    </View>
  );
};

export default ApiComponent;
