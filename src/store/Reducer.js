import { SET_USER_INFO, SET_CONFIG_TYPE, ADD_CONFIG} from './Action';
import { combineReducers } from 'redux'


const INIT_STORE = {
    user: {
        name: '张三',
        age: 20,
        account: 'admin'
    },
    config: [],
    configType: 'all'
};


function user(state = INIT_STORE.user, action){
    switch (action.type){
        case SET_USER_INFO:
            return Object.assign({}, state, action.user);
        default: 
            return state;
    }
}

function config(state = INIT_STORE.config, action){
    switch(action.type){
        case ADD_CONFIG: 
            return [...state, {...action.config}];
        default: 
            return [...state]
    }
}

function configType(state = INIT_STORE.configType, action){
    switch(action.type){
        case(SET_CONFIG_TYPE):
            return action.configType;
        default: 
            return state;
    }
}

const Reducer = combineReducers({
    user,
    config,
    configType
})
//  等价于
// const Reducer = combineReducers({
//     user: user(state.user, action),
//     config: config(state.config, action),
//     configType: configType(state.configType, action)
// })
export default Reducer;

/* 
*   Reducer函数用于定义提交action后对state该执行何种操作
*   @params state   当前的store
*   @params action  Action文件定义的action函数返回的对象
*   return  修改后的store值
*   combineReducers  可以将store进行拆分管理
*/ 