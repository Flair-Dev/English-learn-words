/**
 * @format
 * @flow
 */

import {combineReducers} from 'redux';

import loadings from './loadings';
import errors from './errors';
import words from './words'

export default combineReducers({
  loadings,
  errors,
  words
});
