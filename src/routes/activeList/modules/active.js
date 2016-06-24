// ------------------------------------
// Constants
// ------------------------------------
import thunk from 'redux-thunk'

export const COUNTER_INCREMENT = 'ACTIVE_GET'

// ------------------------------------
// Actions
// ------------------------------------
export function getActive (itemType = 'cur') {
  console.log(itemType)
  return {
    type: COUNTER_INCREMENT,
    itemType: itemType
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

      fetch('./data/eventList.json')
        .then(
          function resolver(ret) {
            console.log(ret)
          },
          function rejector(err) {
            console.log(55, ret)
          })

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
  [COUNTER_INCREMENT]: (state, action) => state + action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
