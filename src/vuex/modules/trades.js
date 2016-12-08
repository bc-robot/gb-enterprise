/**
 * Created by kevin on 16/11/8.
 */
import {
    GET_TRADE_FALIURE,
    GET_TRADE_SUCCESS
} from '../mutation-types'

const state = []

const mutations = {
    [GET_TRADE_FALIURE](state, action) {
        state.trade = []
    },
    [GET_TRADE_SUCCESS](state, action) {
        console.log(action,' this is action  - - - - - -')
        state.trade.push(action)
    }
}

export default {
    state,
    mutations
}