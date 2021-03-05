import style from "./AuthInfo.module.css";
import {NavLink} from "react-router-dom";
import Button from "../../Button/Button";

const AuthInfoBar = ({isAuth, id, login, logout}) => {
    return <div className={style.login}>
        {(isAuth)
            ? (<div>
                <NavLink to={`/info/user/` + id}>{login}</NavLink>
                <NavLink to="/login" onClick={() => logout()}><Button text={"Logout"}/></NavLink>
            </div>)
            : <NavLink to="/login"><Button text={"Login"}/></NavLink>
        }
    </div>
}

export default AuthInfoBar;