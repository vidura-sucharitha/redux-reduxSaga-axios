import {takeLatest} from 'redux-saga/effects';
import {handleGetUser} from '../handlers/userRequestHandler';
import {GET_USER} from '../reducers/userReducer';

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}
