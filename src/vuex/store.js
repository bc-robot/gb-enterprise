import Vue from 'vue'
import Vuex from '../vuex-plugins'
import createLogger from '../vuex-plugins/plugins/logger'
// import middlewares from './middlewares'


import trades from './modules/trades'
import buggy from './modules/buggy'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug

// Vue.config.warnExpressionErrors = false

export default new Vuex.Store({
    modules: {
        trades, buggy
    },
    // strict: debug,
    // plugins: middlewares,
    plugins: debug ? [createLogger()] : []
    // plugins: createLogger()
})