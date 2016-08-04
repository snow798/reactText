/**
 * Created by Administrator on 2016/6/23.
 */
import React from 'react'

export const tabs = React.createClass({
  getInitialState: function() {
    return { };
  },
  componentDidMount: function(props){

  },
  toggleDataType: function(type, event){
    // 修改容器里的状态
    this.props.changeListType(type);
  },
  render: function(props) {
    var mSetStyle= '';
    var pSetStyle= '';
    if(this.props.listType== '1'){
      mSetStyle= 'a_focus'
    }
    if(this.props.listType== '2'){
      pSetStyle= 'a_focus'
    }

    return (
      <div className="content tabs_change">
        <a onClick={this.toggleDataType.bind(this,'1')} className={mSetStyle} data-type="m"><span>活动报名</span></a>
        <a onClick={this.toggleDataType.bind(this,'2')} className={pSetStyle} data-type="p"><span>往期回顾</span></a>
      </div>
    );
  }




});

export default tabs
