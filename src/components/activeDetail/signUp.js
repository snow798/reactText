/**
 * Created by Administrator on 2016/7/12.
 */
import React from 'React'
import './signup.scss'

export const signUp= React.createClass({
  getInitialState: ()=>{
    return {}
  },
  render: ()=>{
    return (
      <div className="popup">
        <div className="mask"></div>
        <div className="container SignUp">
          <div className="close"></div>
          <div className="se1">
            <div className="header">活动报名</div>
            <div className="body">
              <div className="p_row">
                <div className="le">商家名称</div>
                <div className="re"><input className="st_f" type="text" placeholder="请输入您的商铺名称" id="compName" /></div>
              </div>
              <div className="p_row">
                <div className="le">经营大类</div>
                <div className="re">
                  <select id="businessType" className="st_f">
                    <option>请选择经营大类</option>
                    <option>经营大类1</option>
                    <option>经营大类2</option>
                  </select>
                </div>
              </div>
              <div className="p_row">
                <div className="le">报名人</div>
                <div className="re"><input className="st_f" type="text" placeholder="请输入您的姓名" id="userName" /></div>
              </div>
              <div className="p_row">
                <div className="le">手机号</div>
                <div className="re"><input className="st_f" type="text" placeholder="请输入您的手机号" id="phone" /></div>
              </div>
              <div className="p_row">
                <div className="le">参会人数</div>
                <div className="re"><span className="s_sel s_sel_yes" data-num="1"><em></em>1人</span><span className="s_sel" data-num="2"><em></em>2人</span><span className="s_sel" data-num="3"><em></em>3人</span></div>
              </div>
              <div className="p_row">
                <div className="le">验证码</div>
                <div className="re">
                  <input className="st_f Verification" type="text" placeholder="请输入右边的验证码" id="Verification" />

                </div>
              </div>
              <div className="p_info"></div>
              <a className="post_status">提交报名</a>
            </div>
          </div>
          <div className="se2">
            <div className="header">
              <p className="title">报名成功</p>

              <p>我们已收到您的报名，工作人员将在活动开始前2个工作日内与您取得联系，感谢您的支持</p>
            </div>
            <div className="body">
              <div className="p_row">
                <div className="le">商家名称</div>
                <div className="re" id="compName2">星星玩具</div>
                <div className="p_row">
                  <div className="le">经营大类</div>
                  <div className="re" id="businessType2">玩具办公</div>
                  <div className="p_row">
                    <div className="le">报名人</div>
                    <div className="re" id="userName2">XX</div>
                    <div className="p_row">
                      <div className="le">手机号</div>
                      <div className="re" id="phone2">15072401234</div>
                      <div className="p_row">
                        <div className="le">参会人数</div>
                        <div className="re" id="number2">1人</div>
                        <a className="post_status_cc">我知道了</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  });

export default signUp

