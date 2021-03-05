import style from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={style.messageWrapper}>
            <div className={style.messageWrapper_message}>{
                props.message
            }</div>
        </div>
    );
};

export default Message;