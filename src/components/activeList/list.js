/**
 * Created by Administrator on 2016/6/23.
 */

import React from 'react'
import defaultImg from './assets/ba1.jpg'


export const List= (props) => (
  <ul>
    <li>
      <a>
        <div className="img"><img src={defaultImg}/></div>
        <div className="text">
          <span>报名截止时间：2016-06-06 15:30</span>
          <em>立即报名</em>
        </div>
      </a>
    </li>
    

    {props.collection.type}
  </ul>
)

export default List
