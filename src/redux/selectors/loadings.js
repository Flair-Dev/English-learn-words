/**
 * @format
 * @flow
 */

import {createSelector} from 'reselect';

const selectLoadingsReducer = (state: Object) => state && state.loadings;

const selectLoading = (actions: Object | Array<Object>) =>
  createSelector(
    selectLoadingsReducer,
    loadings =>
      Array.isArray(actions)
        ? actions.some(action => loadings.includes(action.toString()))
        : loadings.includes(actions.toString()),
  );

export {selectLoading};
