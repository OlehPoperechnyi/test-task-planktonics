//renders company name and authorization block with user data

import style from './Header.module.css';
import AuthInfo from "./AuthInfo/AuthInfo";

const Header = ({isAuth, id, login, ...props}) => {
    return (
        <div className={style.header}>
            <div className={style.header__logo}>
                Planktonics
            </div>
            <div className={style.header__authInfo}>
                <AuthInfo isAuth={isAuth} login={login} setUserData={props.setUserData}/>
            </div>
        </div>
    );
}

export default Header;