/**
 * @Description: 导航栏
 * @author ZhiYuanWang
 * @date 2020/6/17 5:25
 */
import axios from '../../axios'

export default {
    getNav(){
        return axios.get('topics')
    }
}
