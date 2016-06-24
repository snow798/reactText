/**
 * Created by Administrator on 2016/6/23.
 */
import React from 'react'
import { IndexLink, Link } from 'react-router'


export const Header = () => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={classes.activeRoute}>
      Counter
    </Link>
  </div>
)

export default Header
