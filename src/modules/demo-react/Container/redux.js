const LOAD = 'dynamic-load-component/order/LOAD';
const LOAD_SUCCESS = 'dynamic-load-component/order/LOAD_SUCCESS';
const LOAD_FAIL = 'dynamic-load-component/order/LOAD_FAIL';


export default function(state = {loaded:false}, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        components:{...action.result},
        loading: false,
        loaded: true
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: ({ client }) => client.get('/findComponents.json').then((ret)=>{return ret.data})
  };
}