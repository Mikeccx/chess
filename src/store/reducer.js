import { handleActions } from 'redux-actions';
import { TEST } from './actionType';
export const reducer  = handleActions({
    [TEST]: (state, action) => {
        // debugger
        const { payload } = action
        return {
            list: [...payload]
        }
    }
}, {})