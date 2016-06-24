import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
// 生成 root reducers
export const makeRootReducer = (asyncReducers) => {
  // combineReducers 合并子 reducers
  return combineReducers({
    // Add sync reducers here
    router,
    ...asyncReducers
  })
}
// 插入子 reducer
export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
