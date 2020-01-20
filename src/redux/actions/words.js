import {createAction} from 'redux-actions';

export default {
  addWord: createAction('ADD_WORD'),
  deleteWord: createAction('DELETE_WORD'),
  updateWordGroup: createAction('UPDATE_WORD_GROUP'),
  updateWords: createAction('UPDATE_WORDS'),
  // saveLearnedWords: createAction('SAVE_LEARNED_WORDS')
};
