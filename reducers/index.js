import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants';


var initialState = { count: 0 }

export default ( state = initialState, action ) => {
    switch ( action.type) {
        case INCREMENT_COUNTER:
         return {
             ...state,
             count: state.count + 1
         }
        break;
        case DECREMENT_COUNTER:
         return {
             ...state,
             count: state.count - 1
         }
        break;
        default:
        return initialState
    }
}
