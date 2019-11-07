// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import schedule from 'node-schedule';

import * as TodoActions from '../actions/todos';
import * as SettingsActions from '../actions/settings';
import Todos from '../components/Todos/Todos';
import { jsonStore } from '../store';
import type { Todo, Settings } from '../reducers/types';
import GlobalSettings from '../components/GlobalSettings';

type Props = {
  createTodo: (todo: Todo) => void,
  updateTodo: (todos: Todo[]) => void,
  removeTodo: (todos: Todo[]) => void,
  updateSettings: (settings: Settings) => void
};

const HomePage = ({
  createTodo,
  updateTodo,
  removeTodo,
  updateSettings
}: Props) => {
  /* Cron for triggering todos notifiations :
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
   */

  const todos = jsonStore.get('todos');
  const settings = jsonStore.get('settings');
  console.log('TCL: HomePage -> settings', settings);

  todos.forEach(todo => {
    const date = new Date(todo.date);
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const job = schedule.scheduleJob(`0 ${minutes} ${hours} * * *`, () => {
      new Notification(todo.text, {
        body: `It's ${hours}:${minutes}, you better work bitch!`
      });
    });
    console.log('TCL: HomePage -> job', job, job.nextInvocation());
  });

  return (
    <>
      <Todos
        todos={todos}
        createTodo={createTodo}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      />
      <GlobalSettings settings={settings} updateSettings={updateSettings} />
    </>
  );
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    settings: state.settings
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...TodoActions, ...SettingsActions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
