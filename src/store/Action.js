//  设置用户信息
export const SET_USER_INFO = 'SET_USER_INFO';

//  设置配置列表
export const SET_CONFIG_LIST = 'SET_SYSTEM_LIST';

//  设置配置类型
export const SET_CONFIG_TYPE = 'SET_CONFIG_TYPE'

export const ADD_CONFIG = 'ADD_CONFIG';


export function setUser(user){
    return {
        type: SET_USER_INFO,
        user
    }
}

// export function setConfig(config){
//     return {
//         type: SET_CONFIG_LIST,
//         config
//     }
// }

export function setConfigType(configType){
    return {
        type: SET_CONFIG_TYPE,
        configType
    }
}

export function addConfig(config){
    return {
        type: ADD_CONFIG,
        config
    }
}

//  action文件来定义action的类型和要执行的操作方式
//  action函数返回一个对象，该对象应该含有一个type标识action的类型
//            另外一个参数为需要提交的载荷
//            dispatch调用时传这个函数以便知道当前要进行的操作