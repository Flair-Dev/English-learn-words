/**
 * @format
 * @flow
 */

type StateProps = Array<Object>;

export const initialState: StateProps = [];

export default (state: StateProps = initialState, action: Object) => {
  const {type, payload} = action;
  if (type.includes('_ERROR')) {
    const actionType = type.replace(/_ERROR/, '');
    const isExist = state.find(el => el.type === actionType);
    const newError = {type: actionType, error: payload.error};
    if (isExist) {
      return state.map<Object>(el => (el.type === actionType ? newError : el));
    }
    return [...state, newError];
  }
  return state;
};
