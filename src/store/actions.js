import { TEST } from './actionType'
import { createActions } from 'redux-actions';
import Api from './api'
const actions = createActions({
    [TEST]: (data) => {
        return data
    }
  });
export default actions
export const getListThunkAction = (payload) => {
    return function(dispatch){
        return Api.fetchList().then((res) => {
            dispatch(actions.test(res?.data?.data?.spaces))
        })
    }
}