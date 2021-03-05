import React, { useState, useEffect } from "react";
import style from "./MyMessage.module.css";
import Button from "../../../../../Button/Button";


const MyMessage = ({message, messageId, editMessage}) => {

        let [editMode, setEditMode]  = useState(false);
        let [localMessage, setMessage]  = useState(message);

        const deleteMessage = () => {
            editMessage('', messageId);
        }
        const activateEditMode = () => {
            setEditMode(true);}
        const deactivateEditMode = () => {
            setEditMode(false);
            editMessage(localMessage, messageId);
        }
        const onMessageChange = (e) => {
            setMessage(e.currentTarget.value);
        }
        useEffect(() => {
            setMessage(message);
        }, [message]);

    return (
        <div className={style.messageWrapper}>
            {(message === '')
                ? <div className={`${style.messageWrapper_messageDeleted} ${style.messageWrapper_message}`}>Сообщение удалено</div>
                : <>
                    { editMode
                        ? <div>
                            <div className={style.messageWrapper_message}>
                                <input onBlur={deactivateEditMode}
                                       onChange={onMessageChange}
                                       autoFocus={true}
                                       value={localMessage}/>
                            </div>

                        </div>
                        : <>
                            <div className={style.edit}>
                                <span onClick={activateEditMode}>
                                    <Button text={"edit"}/>
                                </span>
                                <span onClick={deleteMessage}>
                                    <Button text={"delete"}/>
                                </span>
                            </div>
                            <div className={style.messageWrapper_message}>{message}</div>
                        </>
                    }
                </>
            }
        </div>
    );
};

export default MyMessage;