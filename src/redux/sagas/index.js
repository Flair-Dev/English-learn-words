import {spawn} from 'redux-saga/effects';
import commonSaga from './common';

export default function*() {
  yield spawn(commonSaga);
}
