import { handleActions } from 'redux-actions';
import { fetchList } from './action'
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
    }
}, {
    selectedList: []
})