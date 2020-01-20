/**
 * @format
 * @flow
 */

import {createSelector} from 'reselect';

const selectWordsReducer = state => state && state.words;

const selectWords = createSelector(
  selectWordsReducer,
  reducer => reducer.words.filter((word) => word.group < 7).sort((a , b) => a.group - b.group),
);

export {selectWords};
