/**
 * Created by kevin on 16/7/22.
 */
import api from '../api'
import * as types from './mutation-types'

export const getTrade = ({ dispatch },id) => {
    api.getTrade(id).then(response => {
        if(!response.ok) {
            return dispatch(types.GET_TRADE_FALIURE)
        }
        console.log(response, ' this is response!')
        dispatch(types.GET_TRADE_SUCCESS, response.data)
    }, response => {
        dispatch(types.GET_TRADE_FALIURE)
    })
}

export const showBuggy = ({ dispatch,store }, status) => {
    return dispatch(types.SHOW_BUGGY, status)
}

export const subBug = ({ dispatch }, data) => {
    api.subBug(data).then( response => {
        if(!response.ok) {
            return dispatch(types.POST_BUG_FAILURE)
        }
    })
}
