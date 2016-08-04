/**
 * Created by Administrator on 2016/6/23.
 */

import React from 'react'
import { Router, Route, Link } from 'react-router'
import defaultImg from './assets/ba1.jpg'
import loadStatusImg from './assets/8.svg'


export const List = React.createClass({
  getInitialState: function() {
    return {
      loaded: false,
      type: null,
      data: [],
      pageState:{
          1:{     //普通活动
              currentPage: 0,
              totoalPage: 10,
              pageSize: 10
          },
          2:{    //过期活动
              currentPage: 0,
              totoalPage: 10,
              pageSize: 10
          }
      }
    };
  },
  componentDidMount: function(props){
    var base= this;
    var content= this.refs.listCont;
    content.addEventListener('scroll', function(ev){
      var type= base.state.type;
      var scrollTop= this.scrollTop;
      if(scrollTop+ this.clientHeight+20 >= this.scrollHeight && !base.state.listLoad){
        base.state.listLoad= !base.state.listLoad;
        console.log(7777777)
        base.props.getListData(++base.state.pageState[base.state.type].currentPage, type);
      }
    }, false);
  },
  componentWillReceiveProps: function(nextProps) {
      this.setState({type: this.props.listType});
    console.log(444322,  this.state, this.props.listType);
  },

  render: function() {
    var base= this;
    var type= base.props.listType;  //列表类型
    if(this.state.type != type){
        base.props.getListData(++base.state.pageState[type].currentPage, type);
    }
    var data= base.props.collection;
    if(data){
      this.state.data= data;
    }else{
      console.log('no no no')
    }
    return (
      <div className="body"  ref="listCont">
        <div>
          <ul>
            {this.state.data.map(function(result, index) {
              return <li key={index}>
                <Link to={`/activeDetail/${result.id}`}>
                  <div className="img"><img src={result.coverImage}/></div>
                  <div className="text">
                    <span>报名截止时间：{result.releaseTime}</span>
                    <em>立即报名</em>
                  </div>
                </Link>
              </li>;
            })}
          </ul>
          <div className="status"><img src={loadStatusImg} width="25"/><span>正在加载...</span></div>
        </div>
      </div>
    );
  }
});



export default List
