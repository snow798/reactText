/**
 * Created by Administrator on 2016/6/23.
 */
import React from 'react'

export const tabs = React.createClass({
  getInitialState: function() {
    return {
      currentFocus: 'm'
    };
  },
  componentDidMount: function(props){

  },
  toggleDataType: function(type, event){
    console.log(type, event);

    //console.log(this.state.extendStyle.p= 'a_focus');
    this.props.changeListType(type);
  },
  render: function(props) {


    let mSetStyle= function(){
      return this.state.currentFocus== 'm' ? 'a_focus': '';
    }
    let pSetStyle= function(){
      return this.state.currentFocus== 'p' ? 'a_focus': '';
    }

    return (
      <div className="content tabs_change">

        <a onClick={this.toggleDataType.bind(this,'m')} className={mSetStyle} data-type="m"><span>活动报名</span></a>
        <a onClick={this.toggleDataType.bind(this,'p')} className={pSetStyle} data-type="p"><span>往期回顾</span></a>
      </div>
    );
  }




});

export default tabs
