import React from 'react'
import { Router, Route, Link } from 'react-router'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img
      alt='This is a duck, because Redux!'
      className={classes.duck}
      src={DuckImage} />
      <Link to="/activeList">activeList</Link>

  </div>
)

export default HomeView
