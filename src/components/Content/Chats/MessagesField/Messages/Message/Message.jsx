import style from "./Message.module.css";
import AvatarImage from "../../../../../AvatarImage/AvatarImage";


const Message = ({message, user}) => {
    return (
        <div className={style.messageWrapper}>

            <div className={style.messageWrapper__avatar}>
                <AvatarImage link={user.avaUrl}/>
            </div>

            <div className={style.messageWrapper__name}>
                {user.name}
            </div>

            {(message === '')
                ? <div className={`${style.messageWrapper__message_deleted} ${style.messageWrapper__message}`}>
                    Message deleted
                </div>
                : <div className={style.messageWrapper__message}>
                    { message }
                </div>
            }

        </div>
    );
};

export default Message;