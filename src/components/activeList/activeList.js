/**
 * Created by Administrator on 2016/6/23.
 */

import React from 'react'
import Tabs from './tabs'
import List from './list'

import './main.scss'


export const activeList = React.createClass({
  getInitialState: function() {
    this.props.doubleAsync();
    return {data: []};
  },
  componentDidMount: function(props){

      //console.log(data)
  },
  componentWillReceiveProps: function(nextProps) {
    //console.log(777, nextProps.active, this.props.active);
  },
  render: function(props) {
    return (
      <div className="eventList">
        <div className="header"  onClick={this.props.doubleAsync}>
          <Tabs />
        </div>
            <List collection={this.props.active}/>
        </div>
    );
  }
});





export default activeList
