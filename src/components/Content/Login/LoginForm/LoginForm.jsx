import style from "./LoginForm.module.css"
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utilities/validators/validators";
import Button from "../../../Button/Button";

const maxLength30 = maxLengthCreator(30);

const LoginForm = ({handleSubmit, error}) => {
    return (<form onSubmit={handleSubmit}>
            <div className={style.wrapper_error}>
            {error && error}
            </div>
            <div className={style.wrapper_login}>
                <Field placeholder={"Login"}
                       name={"email"}
                       component={Input}
                       validate={[required, maxLength30]}
                />
            </div>
            <div className={style.wrapper_password}>
                <Field placeholder={"Password"}
                       type={"password"}
                       name={"password"}
                       component={Input}
                       validate={[required, maxLength30]}
                />
            </div>

            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
                <div className={style.wrapper_button}>
                    <Button text={"Login"}/>
                </div>
            </div>

        </form>
    );
}

export default reduxForm({form: 'login'})(LoginForm);;
