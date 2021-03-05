import style from './NewMessage.module.css';
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../../../utilities/validators/validators";
import {Textarea} from "../../../../FormsControls/FormsControls";
import Button from "../../../../Button/Button";

const maxLength30 = maxLengthCreator(30);

const NewMessageForm = (props) => {
    return (
        <form className={style.newMessageWrapper} onSubmit={props.handleSubmit}>
            <div>
                <Field autoFocus={true}
                       name={"message"}
                       placeholder={"Input your message..."}
                       component={ Textarea }
                       validate={[maxLength30]}
                />
            </div>
            <Button text={"send"}/>
        </form>
    );
}


const NewMessageReduxForm = reduxForm({
    form: 'newMessage'
})(NewMessageForm);


const NewMessage = (props) => {
    const onSubmit = (formData) => {
        if (formData.message !== undefined) props.updateNewMessage(formData.message, props.chatId, props.userId);
    }
    return <NewMessageReduxForm onSubmit={onSubmit}/>
}

export default NewMessage;