import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'counter',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      //载入组件容器(负责载入react组件、提供绑定组件到模型的hooks)、模型
      const Counter = require('./containers/CounterContainer').default
      const reducer = require('./modules/counter').default    //返回的是 reducer函数或原始数据

      /*  Add the reducer to the store on key 'counter'  */
      //将该组件的reducer 合并到 RootReducer
      injectReducer(store, { key: 'counter', reducer })

      /*  Return getComponent   */
      cb(null, Counter)

    /* Webpack named bundle   */
    }, 'counter')
  }
})
