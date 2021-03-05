//import Image from "../../Images/Image";
import style from "./InformationAbout.module.css";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
//import Preloader from "../../Preloader/Preloader";
//import UserDescription from "./UserProfileComponents/UserDescription";
//import UserStatusWithHooks from "./UserProfileComponents/UserStatusWithHooks";


let UserProfile = (props) => {
    //if (!props.profile) return <Preloader/>

    return <div className={style.userItemWrapper}>
        <div className={style.userItemWrapper_userImage}>
            image
        </div>
        <div className={style.userItemWrapper_userDescription}>
            description
        </div>
        <div className={style.userItemWrapper_userStatus}>
            status
        </div>
        <div className={style.userItemWrapper_userContacts}>
           contacts
        </div>
        <div className={style.userItemWrapper_userFullName}>
            name
        </div>
        <div className={style.userItemWrapper_userJobInformation}>
            jobInfo
        </div>
        <div className={style.userItemWrapper_userLocation}>
            GOOGLE MAP
        </div>
        <div className={style.userItemWrapper_userPartners}>
            PARTNERS
        </div>
        <div className={style.userItemWrapper_userGoods}>
            GOODS
        </div>

    </div>;
}

export default compose(
    withAuthRedirect
)(UserProfile);