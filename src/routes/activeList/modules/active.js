// ------------------------------------
// Constants
// ------------------------------------
import thunk from 'redux-thunk'

export const COUNTER_INCREMENT = 'ACTIVE_GET'

// ------------------------------------
// Actions
// ------------------------------------
export function getActive ({itemType = 'cur', data = null}) {
  console.log(data);
  return {
    type: COUNTER_INCREMENT,
    itemType: itemType,
    active: data,
    time: Date.now()
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const doubleAsync = () => {
  return (dispatch, getState) => {

    return new Promise((resolve) => {
      console.log(fetch)
      //require('data/eventList.json');

      fetch(bassUrl+ '/eventList.json')
        .then(function(res) {
            if(res.ok){
              res.json().then(function (data) {
                console.log(777777,data);
                dispatch(getActive({itemType: 'cur', data: data.data}))
              });
            }
          },
          function(err) {
           alert('err')
          })


      /*fetch('https://www.yiqihao.com/get/time')
        .then(function(res) {
          console.log(55555, res)
          if(res.ok){
            res.json().then(function (data) {
              console.log(99, data);
            });
          }
        })*/
      /*setTimeout(() => {
        dispatch(getActive(getState().counter))
        alert(2343)
        resolve()
      }, 200)*/

    })
  }
}

export const actions = {
  getActive,
  doubleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => {
    console.log(552,state, action)
    let res= action.active;
    let newData= {};
    if(state){
      let old= state.list;
      let ne= action.active.list;
      newData.list=  Object.assign({}, old, ne);
      console.log(3333,newData, old, ne);
    }
    else{
      newData= action.active;
    }
    return  Object.assign({}, state, newData)
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
