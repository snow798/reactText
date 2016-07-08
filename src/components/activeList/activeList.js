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
    return {
      data: [],
      currentListType: 'm'
    };
  },
  componentDidMount: function(props){

      //console.log(data)
  },
  componentWillReceiveProps: function(nextProps) {
    console.log(7773333, nextProps.active, this.props.active);
  },
  changeListType: function(type){
    if(type){
      this.state.currentListType= type;
    }
    console.log(555, this.state)
  },
  render: function(props) {
    return (
      <div className="eventList">
        <div className="header">
          <Tabs changeListType={this.changeListType}/>
        </div>
            <List getListData={this.props.doubleAsync} collection={this.props.active}/>
        </div>
    );
  }
});





export default activeList
