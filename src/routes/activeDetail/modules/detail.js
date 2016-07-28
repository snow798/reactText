/**
 * Created by Administrator on 2016/7/11.
 */

import thunk from 'redux-thunk'
//声明 action
export const DETAIL_GET_DATA = 'DETAIL_GET'

// ------------------------------------
// Actions
// ------------------------------------
export function getDetail ({id = 0}) {
  return {
    type: DETAIL_GET_DATA,
    id: id
  }
}


export const actions = {
  getDetailAsync: (id) => {
    return (dispatch, getState) => {
      return new Promise((resolve) => {
        fetch(bassUrl+ '/detailsList.json')
          .then(function(res) {
              if(res.ok){
                res.json().then(function (data) {
                  console.log(777777,data);
                  dispatch(getDetail({id: 1}))
                });
              }
            },
            function(err) {
              alert('err')
            })
      })
    }
  }
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [DETAIL_GET_DATA]: (state, action) => {
    console.log(552,state, action)
    /*let res= action.active;
    let newData= {};
    if(state){
      let old= state.list;
      let ne= action.active.list;
      newData.list=  Object.assign({}, old, ne);
      console.log(3333,newData, old, ne);
    }
    else{
      newData= action.active;
    }*/
    return  Object.assign({}, state, action)
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
