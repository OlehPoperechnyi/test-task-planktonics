//provides access to the state using a "connect"

import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";


let mapStateToProps = (state) => ({
    id: state.auth.id,
    login: state.auth.login,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { setUserData })(Header);