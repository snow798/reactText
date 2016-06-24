/**
 * Created by Administrator on 2016/6/23.
 */

import { injectReducer } from '../../store/reducers'
import activeList from  'components/activeList'

export default (store) => ({
  path: 'activeList',
  /*  Async getComponent is only invoked when route matches   */
  //component: activeList
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const Counter = require('./containers/CounterContainer').default
      const reducer = require('./modules/active').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'active', reducer })

      /*  Return getComponent   */
      cb(null, Counter)

      /* Webpack named bundle   */
    }, 'counter')
  }
})