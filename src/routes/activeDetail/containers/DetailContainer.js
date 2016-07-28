/**
 * Created by Administrator on 2016/7/11.
 */
import { connect } from 'react-redux'
import { actions } from '../modules/detail'

import Counter from 'components/activeDetail'

const mapActionCreators = {
  getDetailAsync: actions.getDetailAsync
}

const mapStateToProps = (state) => ({
  active: state.detail
})


export default connect(mapStateToProps, mapActionCreators)(Counter)
