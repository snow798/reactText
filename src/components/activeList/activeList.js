/**
 * Created by Administrator on 2016/6/23.
 */

import React from 'react'
import Tabs from './tabs'
import List from './list'

import './main.scss'


export const activeList = React.createClass({
  getInitialState: function() {
    //this.props.doubleAsync();
    return {
      data: [],
      currentListType: '1'
    };
  },
  componentDidMount: function(props){
  },
  componentWillReceiveProps: function(nextProps) {
    console.log(2234444, nextProps.active, this.props.active);
  },
  changeListType: function(type){
    if(type){
      this.setState({currentListType: type});
    }
    //this.props.doubleAsync(1, this.currentListType);
    console.log(8889, this.state)
  },
  render: function(props) {
    return (
      <div className="eventList">
        <div className="header">
          <Tabs changeListType={this.changeListType} listType={this.state.currentListType}/>
        </div>
            <List getListData={this.props.doubleAsync} listType={this.state.currentListType} collection={this.props.active}/>
        </div>
    );
  }
});





export default activeList
