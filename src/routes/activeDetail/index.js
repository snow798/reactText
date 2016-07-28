/**
 * Created by Administrator on 2016/7/11.
 */

import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'activeDetail/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Counter = require('./containers/DetailContainer').default
      const reducer = require('./modules/detail').default
      injectReducer(store, { key: 'detail', reducer })
      cb(null, Counter)
    }, 'detail')
  }
})
