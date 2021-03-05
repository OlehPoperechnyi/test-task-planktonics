import style from './Header.module.css';
import AuthInfo from "./AuthInfo/AuthInfo";

const Header = ({isAuth, id, login, ...props}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.wrapper_logo}>
                Planktonics
            </div>
            <div className={style.wrapper_authInfo}>
                <AuthInfo isAuth={isAuth} id={id} login={login} logout={props.logout}/>
            </div>
        </div>
    );
}

export default Header;