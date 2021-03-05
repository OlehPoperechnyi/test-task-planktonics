import * as React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {login, logout} from "../../../redux/auth-reducer";

class LoginContainer extends React.Component {
    render() {
        return <Login {...this.props}/>;
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps,{
    login,
    logout
})(LoginContainer)