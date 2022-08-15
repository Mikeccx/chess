import { handleActions } from 'redux-actions';
import { fetchList, changeSelectList, changeTest } from './action'
import { WIKI_LIST } from './scheme';
import { normalize  } from 'normalizr';
export const wikiReducer  = handleActions({
    [fetchList]: (state, action) => {
        const { payload } = action
        const wikiList = normalize(payload, WIKI_LIST)
        return {
            ...state,
            wiki_list: wikiList?.entities?.space
        }
    },
    [changeSelectList]: (state, action) => {
        const { payload } = action
        return {
            ...state,
            selectedList: payload
        }
    },
    [changeTest]: (state, action) => {
        const { payload } = action
        return {
            ...state,
            test: {
                ...state.test,
                b: payload
            }
        }
    }
}, {
    selectedList: [],
    test: {
        a: 1,
        b: 2
    }
})