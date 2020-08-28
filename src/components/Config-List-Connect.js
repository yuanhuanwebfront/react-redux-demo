import { connect } from 'react-redux'
import ConfigList from './Config-List';


function getTypeList(list, type){
    if(type == 'all'){
        return list
    }else{
        return list.filter(item => item.type == type)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        list: getTypeList(state.config, state.configType)
    }
}

const ConfigListConnect = connect(
    mapStateToProps
)(ConfigList);

export default ConfigListConnect;