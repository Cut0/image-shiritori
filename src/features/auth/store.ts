import { createContext, Reducer } from 'react';
import { User } from '../../@types';
type Action =
  | { type: 'FETCH_MYSELF_START' }
  | { type: 'FETCH_MYSELF_SUCCESS'; payload: User }
  | { type: 'FETCH_MYSELF_FAILED'; payload: Error }
  | { type: 'REMOVE_USER' };

type State =
  | { status: 'initial' }
  | { status: 'loading' }
  | { status: 'success'; user: User }
  | { status: 'failed'; error: Error };

export const initialState: State = { status: 'initial' };

export const reducer: Reducer<State, Action> = (
  state: State,
  action: Action,
) => {
  switch (action.type) {
    case 'FETCH_MYSELF_START':
      return {
        ...state,
        status: 'loading',
      };
    case 'FETCH_MYSELF_SUCCESS':
      return {
        ...state,
        status: 'success',
        user: action.payload,
      };
    case 'FETCH_MYSELF_FAILED':
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };
    case 'REMOVE_USER':
      return {
        ...state,
        status: 'initial',
      };
    default:
      return state;
  }
};

export const AuthContext = createContext<[State, (action: Action) => void]>([
  initialState,
  () => {},
]);
