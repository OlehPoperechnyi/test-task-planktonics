import React from "react";
import style from "./FormsControls.module.css";

export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = error && touched;
    return (
        <div className={style.wrapperInput}>
            <div className={style.wrapperInput__formControlsInput + ' ' + (hasError ? style.error : '')}>
                <input {...input} {...props} className={style.fieldInput}/>
            </div>
            { hasError && <span className={style.error}>{error}</span>}
        </div>
    );
}