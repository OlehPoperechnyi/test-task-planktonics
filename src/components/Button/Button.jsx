//renders the button in the style of the application

import style from "./Button.module.css";

const Button = (props) => {
    return (
        <button {...props} className={style.button}>{props.text}</button>
    );
}

export default Button;