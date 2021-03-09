import style from "./MyMessage.module.css";


const MyMessage = ({message, messageId, editMessage, editMessageId, setMessageEditMode, setActiveMessage}) => {

    const deleteMessage = () => {
        editMessage('', messageId);
    }

    const activateEditMode = () => {
        setMessageEditMode(messageId);
        setActiveMessage(message);//pass the message text to the active message field for editing
    }
    return (
        <div className={style.myMessageWrapper}>
            {(message === '')
                ? <div className={`${style.myMessageWrapper__message} ${style.myMessageWrapper__message_deleted}`}>
                    Message deleted
                </div>
                : <div>
                    <div className={`${style.myMessageWrapper__message}  ${(editMessageId === messageId) && style._editMode}`}>
                        {message}
                    </div>
                    { //edit and delete buttons
                        (editMessageId !== messageId) && <div className={style.myMessageWrapper__editWrapper}>
                        <span className={style.myMessageWrapper__editWrapper_edit} onClick={activateEditMode}>
                                edit
                        </span>
                        <span className={style.myMessageWrapper__editWrapper_delete} onClick={deleteMessage}>
                                delete
                        </span>
                    </div>}
                </div>
            }
        </div>
    );
}

export default MyMessage;