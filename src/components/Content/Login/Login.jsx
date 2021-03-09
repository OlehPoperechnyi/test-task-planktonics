import style from "./Login.module.css"
import {Redirect} from "react-router";
import LoginForm from "./LoginForm/LoginForm";

const Login = ({isAuth, onSubmit, maxLength30}) => {
    return (isAuth
            ? <Redirect to={"/chats/1"}/>
            : <div className={style.loginFormWrapper}>
                    <div className={style.loginFormWrapper__formName}>
                        Log In
                    </div>
                    <LoginForm onSubmit={onSubmit} maxLength30={maxLength30}/>
                </div>
    )
};

export default Login;