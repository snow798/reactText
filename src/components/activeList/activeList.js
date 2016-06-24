/**
 * Created by Administrator on 2016/6/23.
 */

import React from 'react'
import Tabs from './tabs'
import List from './list'
import loadStatusImg from './assets/8.svg'
import './main.scss'

/*export const activeList = (props) => (
  <div className="eventList">
    <div className="header">
      <Tabs />
      {console.log(props)}
    </div>
    <div className="body" id="listCont">
      <div>
        <List />
        <ul className="past"></ul>
        <div className="status"><img src={loadStatusImg} width="25"/><span>正在加载...</span></div>
      </div>
    </div>
  </div>
)*/


export const activeList = React.createClass({
  getInitialState: function() {
    return {data: [435,555]};
  },
  componentDidMount: function(){

  },
  render: function(props) {
    return (
      <div className="eventList">
        <div className="header"  onClick={this.props.doubleAsync}>
          <Tabs />
          {console.log(this.props.doubleAsync)}
        </div>
        <div className="body" id="listCont">
          <div>
            <List />
            <ul className="past"></ul>
            <div className="status"><img src={loadStatusImg} width="25"/><span>正在加载...</span></div>
          </div>
        </div>
      </div>
    );
  }
});





export default activeList
