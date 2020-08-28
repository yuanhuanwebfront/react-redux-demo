import { connect } from 'react-redux'

import SystemSelect from './System-Select';
import { setConfigType } from '../Store/Action'

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.configType === ownProps.type
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setConfigType(ownProps.type))
        }
    }
}

const SystemSelectConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(SystemSelect);

export default SystemSelectConnect

/*

    mapDispatchToProps  用于将dispatch加入组件的事件中
    @params dispatch    用于提交action使用
    @params ownProps    自己的props
*/