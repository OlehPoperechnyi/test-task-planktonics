import style from './NewMessage.module.css';
import Button from "../../../../Button/Button";

const NewMessage = ({hasError, onSubmit, textareaRef, validation, activeMessageField, editMessageId}) => {
    return (
        <div className={style.newMessageWrapper}>
            <div className={style.newMessageWrapper__newMessageField + ' '
            + (editMessageId !== 0 ? style._edit : '') + ' '//highlight edit mode
            + (hasError ? style.error : '')//highlight error mode
            }>
                <textarea className={style._fieldTextarea}
                          autoFocus={true}
                          name={"message"}
                          placeholder={"Input your message..."}
                          onChange={ () => validation(textareaRef.current.value)}
                          ref={textareaRef}
                          value={activeMessageField}
                />
                {//error message
                    hasError && <span className={style._error}>{hasError}</span>
                }
            </div>
            {//disable button on error
                !hasError ? <div onClick={() => onSubmit(activeMessageField)}>
                    <Button text={"send"}/>
                </div>
                : <div>
                    <Button disabled="disabled" text={"send"}/>
                </div>}
        </div>
    );
};

export default NewMessage;