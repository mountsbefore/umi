import axios from 'axios'  

function getGoods(){
    return axios.get('/api/goods').then(({data}) => {
        console.log(data)
        return {
            courses : data.courseData.data,
            tags: data.courseData.tags
        }
    });
}
export default {
    namespace: 'goods',
    state: {
        courses: {},
        tags: []
    },
    effects: {
        *getList(action,{call , put}){
            const payload = yield call(getGoods);
            yield put({type: "initGoods", payload})
        }
    },reducers: {
        initGoods(state,{payload}){
            return payload;
        }
    }
}