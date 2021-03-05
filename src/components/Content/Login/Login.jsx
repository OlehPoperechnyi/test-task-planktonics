import style from "./Login.module.css"
import {Redirect} from "react-router";
import LoginForm from "./LoginForm/LoginForm";


const Login = ({isAuth, login}) => {

    const onSubmit = ({email, password, rememberMe}) => {
        login(email, password, rememberMe);
    }
    if (isAuth) {
        return <Redirect to={"/chats/1"}/>
    }
    return (
        <div className={style.wrapper}>
            <div className={style.wrapper_loginForm}>
                <div className={style.wrapper_loginForm_formName}>
                    Log In
                </div>
                <LoginForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Login;