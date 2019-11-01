import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type RootState = {
  todos: Todo[]
}

export type Todo = {
  +title: string,
  +description: string,
  +status: boolean,
  +date: Date,
}

export type Action = {
  +type: string
};

export type GetState = () => RootState;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
