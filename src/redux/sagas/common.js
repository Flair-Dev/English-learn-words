import {select, takeEvery, put} from 'redux-saga/effects';
import NavigationService from '../../services/Navigation';
import actions from '../actions';

function* handleAppState() {
  // yield put(actions.saveLearnedWords())
  NavigationService.navigate('App');
}

export default function*() {
  yield takeEvery(actions.appLoaded, handleAppState);
}
