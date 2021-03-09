//provides access to the state using a "connect", work with new(edit) message field

import {addMessage, setMessageEditMode, editMessage, setActiveMessage} from '../../../../../redux/messages-reducer';
import NewMessage from "./NewMessage";
import {connect} from "react-redux";
import {maxLengthCreator} from "../../../../../utilities/validators/validators";
import React from "react";

const maxLength150 = maxLengthCreator(150);//create new validator

const NewMessageContainer = React.forwardRef((props, ref) => {

    let [hasError, setHasError] = React.useState(false);

    const textareaRef = React.useRef(null);//get data from textarea field(new/edit message field)

    const validation = (value) => {
        setHasError(maxLength150(value) !== undefined
            ? maxLength150(value) : false);
        props.setActiveMessage(value);
    }

    const onSubmit = (value) => {//send a message or confirm editing
        ((value !== '') && (
            props.editMessageId === 0
                ? props.addMessage(value, props.chatId, props.userId)
                : props.editMessage(value, props.editMessageId)
        ));
        props.setActiveMessage('');
        props.setMessageEditMode(0);
    }

    return <NewMessage {...props} validation={validation}
                       onSubmit={onSubmit}
                       textareaRef={textareaRef}
                       hasError={hasError}/>
});

let mapStateToProps = (state) => {
    return {
        userId: state.auth.id,
        chatId: state.messagesData.chatsList.activeChatId,
        editMessageId: state.messagesData.editMessageId,
        activeMessageField: state.messagesData.activeMessageField,
    };
};

export default connect(mapStateToProps,
    {addMessage, setMessageEditMode,
        editMessage, setActiveMessage}
    )(NewMessageContainer);
