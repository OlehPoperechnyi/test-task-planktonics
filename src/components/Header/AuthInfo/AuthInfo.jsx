//renders a block of information about an authorized user

import style from "./AuthInfo.module.css";
import {NavLink} from "react-router-dom";
import Button from "../../Button/Button";
import AvatarImage from "../../AvatarImage/AvatarImage";


const AuthInfoBar = ({isAuth, login, setUserData}) => {
    return isAuth
            ? (<div className={style.authInfoBar}>
                <div className={style.authUser}>
                    <AvatarImage link="" /> {login}
                </div>
                <NavLink to="" onClick={() => setUserData(null, null, null, false, false)}>
                    <Button text={"Logout"}/>
                </NavLink>
            </div>)

            : <NavLink to="">
                <Button text={"Login"}/>
            </NavLink>
}

export default AuthInfoBar;