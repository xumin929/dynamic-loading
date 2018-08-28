const ADD_COUNT = 'dynamic-load-component/order/ADD';
const MPP_COUNT = 'dynamic-load-component/order/MPP';



export default function(state = {value:1}, action = {}) {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        value:state.value+2
      };
    case MPP_COUNT:
      return {
        ...state,
        value:state.value-2
      };
    default:
      return state;
  }
}

export function add() {
  return {
    type: ADD_COUNT
  };
}

export function mpp() {
  return {
    type: MPP_COUNT
  };
}