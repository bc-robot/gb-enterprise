/**
 * Created by kevin on 16/7/23.
 */
import { TradeResource, SubmitBug } from './resources'

export default {
    getTrade: function(data) {
        return TradeResource.get({id: 'local'}, data)
    },
    subBug: function(data) {
        return SubmitBug.post(data)
    }
}
