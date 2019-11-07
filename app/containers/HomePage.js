import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import schedule from 'node-schedule';

import * as TodoActions from '../actions/todos';
import Todos from '../components/Todos/Todos';
import { jsonStore } from '../store';
import { Todo } from '../reducers/types';
import GlobalSettings from '../components/GlobalSettings';

type Props = {
  createTodo: (todo: Todo) => void,
  updateTodo: (todos: Todo[]) => void,
  removeTodo: (todos: Todo[]) => void
};

const HomePage = ({ createTodo, updateTodo, removeTodo }: Props) => {
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
      <GlobalSettings />
    </>
  );
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TodoActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
