// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import TodoList from './Todos/TodoList';
import TodosContainer from './Todos/TodosContainer';

type Props = {};

const Home = (props: Props) => {
  console.log(props);

  return (
    <div className={styles.container} data-tid="container">
      <h2>TodayList</h2>
      <TodosContainer />
      {/* <Link to={routes.COUNTER}>to Counter</Link> */}
    </div>
  );
}

export default Home;
