/**
 * Created by kevin on 16/7/23.
 */
import { TradeResource } from './resources'

export default {
    getTrade: function(data) {
        return TradeResource.get({id: 'local'}, data)
    }
}
