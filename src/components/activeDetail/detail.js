/**
 * Created by Administrator on 2016/7/11.
 */
import React from 'react'
import SinginUp from './signUp'
import defaultImg from './assets/de.png'
import './main.scss'

export const detail = React.createClass({
  getInitialState: function() {
    let id= this.props.params.id;
    this.initDetail(id);
    return {
      page: {
        banner: null,
        title: null,
        site: null,
        time: null
      }
    };
  },
  componentDidMount: function(props){
  },
  initDetail: function(id){
    this.props.getDetailAsync(id);
  },
  render: function(props) {
    return (
      <div>
        <div className="main eventDetails">
          <div>
            <div className="banner" onClick={this.initDetail}><img id="k_banner" src={defaultImg}/></div>
            <div className="eventStatus">
              <div className="title" id="k_title">活动标题活动标题主题</div>
              <div className="site" id="k_site">活动地点：汉口北电商大厦二楼会议厅</div>
              <div className="time" id="k_time">活动时间：2016-06-06 15:30</div>
              <a className="postOrEvent">立即报名</a>
              <div className="extend" id="k_endTime">报名截止时间：2016-06-06 15:30<span>报名人数：<em id="k_number">32</em></span>
              </div>
            </div>
            <div className="details">
              <div className="header_no">
                <div className="cont"><em></em>活动详情</div>
                <div className="e_line"></div>
              </div>
              <div className="header_yes">
                <a data-type="1" className="a_focus"><span>活动详情</span></a>
                <a data-type="2"><span>现场回顾</span></a>
              </div>
              <div className="body">
                <div className="eventDetailsCont"></div>
                <div className="siteReviewCont"></div>
              </div>
            </div>
            <div className="author">
              <div className="title">
                <div className="cont"><em></em>支持人/特邀嘉宾</div>
                <div className="e_line"></div>
              </div>
              <div className="body" id="J_Scroll">
                <div className="show_author xs-container">
                  <div className="cont xs-content" id="hostCont">


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SinginUp />
      </div>
    );
  }
});

export default detail
