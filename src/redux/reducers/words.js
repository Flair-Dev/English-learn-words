import {handleActions} from 'redux-actions';
import actions from '../actions';

const initialState = {
  words: [],
  learnedWords: []
};

const addWord = {
  [actions.addWord]: (state, {payload}) => ({
    ...state,
    words: [...state.words, payload],
  }),
};

const deleteWord = {
  [actions.deleteWord]: (state, {payload}) => {
    const words = [...state.words];
    state.words.forEach((word, index) => {
      if (word.id === payload.id) {
        words.splice(index, 1);
      }
    });
    console.log('words', words);
    return {
      ...state,
      words,
    };
  },
};

const updateWordGroup = {
  [actions.updateWordGroup]: (state, {payload}) => ({
    ...state,
    words: state.words.map(word => {
      if (word.id === payload.id) {
        word.group = word.group + payload.crement;
      }
      return word;
    }),
  }),
};

const updateWords = {
  [actions.updateWords]: (state, {payload}) => ({
    ...state,
    learnedWords: [...state.learnedWords, ...payload.filter((word) => word.group >= 7)],
    words: payload
  })
}

// const saveLearnedWords = {
//   [actions.saveLearnedWords]: (state) => ({
//     ...state,
//
//   })
// }

export default handleActions(
  {
    ...addWord,
    ...deleteWord,
    ...updateWordGroup,
    ...updateWords,
  },
  initialState,
);
