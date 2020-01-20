/**
 * @format
 * @flow
 */

import {createAction} from 'redux-actions';

export function createActionsSet(type: string) {
  return {
    request: createAction(type + '_REQUEST'),
    success: createAction(type + '_SUCCESS'),
    error: createAction(type + '_ERROR'),
    toString: () => type,
  };
}
