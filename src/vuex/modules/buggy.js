/**
 * Created by kevin on 16/11/26.
 */
import {
    POST_BUG_FAILURE, POST_BUG_SUCCESS, SHOW_BUGGY
} from '../mutation-types'

const state = {
    showModal: false,
    fadeModal: false,
    zoomModal: false,
    showCustomModal: false,
    largeModal: false,
    smallModal: false,

    // buggything
    buggyTitle: '',
    buggyContent: ''
}  // buggy modal


const mutations = {
    [SHOW_BUGGY](state, action) {
        console.log(state, action, 'this is show_buggy')
        state.showModal = action
    },
    [POST_BUG_SUCCESS](state, action) {

    },
    [POST_BUG_FAILURE](state, action) {
        console.log(action,' this is action  - - - - - -')
        state.trade.push(action)
    }
}

export default {
    state,
    mutations
}