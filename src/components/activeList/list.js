/**
 * Created by Administrator on 2016/6/23.
 */

import React from 'react'
import defaultImg from './assets/ba1.jpg'

export const List = React.createClass({

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
      <ul>
        {items}
      </ul>
    );
  }
});

export default List
