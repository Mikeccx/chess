// import { handleActions } from 'redux-actions';
// import { TEST } from './actionType';
import {wikiReducer} from '../dao/reducer'
// export const testReducer  = handleActions({
//     [TEST]: (state, action) => {
//         const { payload } = action
//         return {
//             list: [...payload]
//         }
//     }
// }, {})

export const reducer = wikiReducer
