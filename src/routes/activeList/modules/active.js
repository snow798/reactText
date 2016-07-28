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
