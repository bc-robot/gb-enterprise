/**
 * Created by kevin on 16/11/23.
 */
import { STORAGE_KEY } from './store'
import createLogger from './logger'

const localStoragePlugin = store => {
    store.subscribe((mutation, { todos }) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    })
}

export default process.env.NODE_ENV !== 'production'
    ? [createLogger(), localStoragePlugin]
    : [localStoragePlugin]
