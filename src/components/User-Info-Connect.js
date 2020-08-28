import UserInfo from './User-Info';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    
    return {
        user: ownProps.user ? ownProps.user : state.user,
        type: state.configType
    }
}

//  纯展示组件  不需要dispatch
const UserInfoConnect = connect(
    mapStateToProps
)(UserInfo);

export default UserInfoConnect;


/* 

    mapStateToProps     将state中的值混入组件的props中 
    @params state       react-redux中的Store
    @params ownProps    组件本身的props     不包含函数生成的props
    return 返回一个新的props

*/