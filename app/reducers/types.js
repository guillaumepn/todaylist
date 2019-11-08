// @flow
import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type RootState = {
  todos: Todo[],
  settings: Settings
};

export type Todo = {
  +id: number | string,
  +title: string,
  +description: string,
  +status: boolean,
  +date: Date,
  +disableNotification: boolean
};

export type Settings = {
  +resetHours: number,
  +resetMinutes: number
};

export type Action = {
  +type: string
};

export type GetState = () => RootState;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
