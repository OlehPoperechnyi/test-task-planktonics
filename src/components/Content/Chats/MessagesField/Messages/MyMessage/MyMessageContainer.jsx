import {connect} from "react-redux";
import MyMessage from "./MyMessage";
import {editMessage, setActiveMessage, setMessageEditMode} from "../../../../../../redux/messages-reducer";


let myMessagesDataStateToProps = (state) => {
    return {
        editMessageId: state.messagesData.editMessageId,
    };
};

export default connect(myMessagesDataStateToProps, {editMessage, setMessageEditMode, setActiveMessage})(MyMessage);