/**
 * Created by Administrator on 2016/6/23.
 */

import React from 'react'
import defaultImg from './assets/ba1.jpg'
import loadStatusImg from './assets/8.svg'

export const List = React.createClass({
  getInitialState: function() {
    return {
      loaded: false,
      type: 'm'
    };
  },
  componentDidMount: function(props){
    var base= this;
    var content= this.refs.listCont;
    content.addEventListener('scroll', function(ev){
      console.log(222222, content, base.state.sd)

      var tp= base.state.type== 'm' ? 'eventDetails': 'siteReview';
      var scrollTop= this.scrollTop;
      if(scrollTop+ this.clientHeight+20 >= this.scrollHeight && !base.state.listLoad){
        console.log(7777777)
      }
    }, false);
  },
  render: function(props) {
    let items = [];
    if(this.props.collection && this.props.collection.list){
      let list= this.props.collection.list;
      for (var i in list) {
        let ob= list[i];
        items.push(<li>
          <a>
            <div className="img"><img src={defaultImg}/></div>
            <div className="text">
              <span>报名截止时间：{ob.time}</span>
              <em>立即报名</em>
            </div>
          </a>
        </li>);
      }
    }else{
      console.log('no no no')
    }
    return (
      <div className="body"  ref="listCont">
        <div>
          <ul>
            {items}
          </ul>
          <div className="status"><img src={loadStatusImg} width="25"/><span>正在加载...</span></div>
        </div>
      </div>
    );
  }
});



export default List
