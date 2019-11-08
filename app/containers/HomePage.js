// @flow
import React, { useEffect } from 'react';
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
  todos: Todo[],
  settings: Settings,
  fetchTodos: () => void,
  createTodo: (todo: Todo) => void,
  updateTodo: (todos: Todo[]) => void,
  removeTodo: (todos: Todo[]) => void,
  fetchSettings: () => void,
  updateSettings: (settings: Settings) => void
};

const HomePage = ({
  todos,
  settings,
  fetchTodos,
  fetchSettings,
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

  useEffect(() => {
    fetchTodos();
    fetchSettings();
  }, []);

  // Define todos reset time job
  schedule.scheduleJob(
    `0 ${settings.resetMinutes} ${settings.resetHours} * * *`,
    () => {
      console.log('reset todos');
    }
  );

  // Initiate todos notifications jobs
  todos.forEach(todo => {
    const date = new Date(todo.date);
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const job = schedule.scheduleJob(`0 ${minutes} ${hours} * * *`, () => {
      new Notification(todo.text, {
        body: `It's ${hours}:${minutes}, you better work bitch!`
      });
    });
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
