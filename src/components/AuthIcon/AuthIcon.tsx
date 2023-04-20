import styles from "./AuthIcon.module.css";
import { SocialMediaButton } from "../buttons/SocialMediaButton/SocialMediaButton";

const AuthIcon = ({href='/auth'}) => {
  return (
    <div className={styles.user}>
      <SocialMediaButton name='user'href={href} />
    </div>
  )

}

export default AuthIcon;