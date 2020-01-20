/**
 * @format
 * @flow
 */

import {createSelector} from 'reselect';

const selectErrorsReducer = (state: Object) => state && state.errors;

const selectError = (action: Object) =>
  createSelector(
    selectErrorsReducer,
    errors => {
      let error = errors.find(el => el.type === action.toString());
      if (error) {
        return error.error;
      }
      return null;
    },
  );

export {selectError};
