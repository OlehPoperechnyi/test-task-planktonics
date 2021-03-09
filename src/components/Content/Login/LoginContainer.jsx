import { SubmissionError } from 'redux-form'
import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {setUserData} from "../../../redux/auth-reducer";


const LoginContainer = (props) => {

    const userInfo = {
        id: 8461,
        email: "test@gmail.com",
        login: "VasiaPupkin",
        password: "qwer1234"
    }

    const onSubmit = ({email, password, rememberMe}) => {
        if ((email === userInfo.email) && (password === userInfo.password)) {
            props.setUserData(userInfo.id, userInfo.email, userInfo.login, true, rememberMe);
        } else {
            throw new SubmissionError({
                _error: 'Login or password failed!!!'
            })
        }
    }

    return <Login {...props} onSubmit={onSubmit} />;
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {setUserData})(LoginContainer)