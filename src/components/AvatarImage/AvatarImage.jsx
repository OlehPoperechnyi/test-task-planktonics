import style from "./AvatarImage.module.css";

const AvatarImage = ({link}) => {
    return <div className={style.avatar}>
        <img src={
            link === '' ? 'https://banner2.cleanpng.com/20181130/zlz/kisspng-portable-network-graphics-avatar-computer-icons-im-ui-icon-icon-5c0174b58a31f3.0460868615435992855661.jpg'
                : link } alt={"avatar"} />
    </div>
}

export default AvatarImage;