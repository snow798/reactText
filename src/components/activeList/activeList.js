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
    this.props.doubleAsync();
    return {data: []};
  },
  componentDidMount: function(props){

      //console.log(data)
  },
  componentWillReceiveProps: function(nextProps) {
    console.log(777, nextProps.active, this.props.active);
  },
  render: function(props) {
    return (
      <div className="eventList">
        <div className="header"  onClick={this.props.doubleAsync}>
          <Tabs />
        </div>
        <div className="body" id="listCont">
          <div>
            <List collection={this.props.active}/>
            <ul className="past"></ul>
            <div className="status"><img src={loadStatusImg} width="25"/><span>正在加载...</span></div>
          </div>
        </div>
      </div>
    );
  }
});





export default activeList
