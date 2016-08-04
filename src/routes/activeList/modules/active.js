// ------------------------------------
// Constants
// ------------------------------------
import thunk from 'redux-thunk'

export const COUNTER_INCREMENT = 'ACTIVE_GET'

// ------------------------------------
// Actions
// ------------------------------------
export function getActive({
  itemType = 'cur',
  data = null
}) {
  console.log(data);
  return {
    type: COUNTER_INCREMENT,
    itemType: itemType,
    active: data,
    time: Date.now()
  }
}

export const doubleAsync = (currentPage=0, type=1) => {
  return (dispatch, getState) => {

    return new Promise((resolve) => {
      console.log(fetch)
      var param = {
        sy_sy: 'Android',
        sy_ch: 1,
        sy_ci: 1.0,
        sy_cv: 1.0,
        sy_iv: 1.3,
        sy_di: 1,
        sy_pa: currentPage,
        sy_si: 5,
        sc_st: type
      };
      fetch(bassUrl + '/api/schoolTopic/list.json', {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: util.serializeParam(param)
      }).then(function(res) {
          if (res.ok) {
            res.json().then(function(data) {
              console.log(777777, data);
              dispatch(getActive({
                itemType: 'cur',
                data: data.data.schoolTopicMobileVoList || []
              }))
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
    console.log(552, state, action)
    if(!state){
        state= Array();
    }
    let newValue= [];
    let res = action.active;
    /*let newData = {};
    if (state) {
      let old = state;
      let ne = action.active;
      newData = Object.assign({}, old, ne);
      console.log(333350, old, ne,newData);

    } else {
      newData = action.active;
    }
    return Object.assign({}, state, newData)*/

    if(Array.isArray(res)){
        newValue= state.concat(res);
    }
    return newValue;
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
