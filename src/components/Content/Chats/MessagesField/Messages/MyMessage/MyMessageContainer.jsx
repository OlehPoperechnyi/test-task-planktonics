import {connect} from "react-redux";
import MyMessage from "./MyMessage";
import {editMessage} from "../../../../../../redux/messages-reducer";


let myMessagesDataStateToProps = (state) => {
    return {

    };
};

export default connect(myMessagesDataStateToProps, {editMessage})(MyMessage);