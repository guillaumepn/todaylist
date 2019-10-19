// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import TodoList from './TodoList';

type Props = {};

const Home = (props: Props) => {
  console.log(props);

  return (
    <div className={styles.container} data-tid="container">
      <h2>TodayList</h2>
      <TodoList />
      {/* <Link to={routes.COUNTER}>to Counter</Link> */}
    </div>
  );
}

export default Home;
