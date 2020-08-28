import React from 'react'
import {connect} from 'react-redux'
import { addConfig } from '../Store/Action'

function renderConfig(){
    let num = Math.floor(Math.random() * 100),
        type = num % 2 == 0 ? 'all' : 'admin';
    return {
        num,
        type
    }
}

let AddConfig = ({dispatch}) => {
    return <button onClick={() => dispatch(addConfig(renderConfig()))}>
        添加config
    </button>
}

AddConfig = connect()(AddConfig)

export default AddConfig    