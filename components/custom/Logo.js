import Image from "next/image"
import styles from "./styles/logo.module.css"

const Logo = () => {
  return(
    <div className={styles.logo_container}>
      <Image className={styles.logo} src="/logo.png" alt="logo" width={60} height={60}/>
      <div className={styles.text_container}>
        <div className={styles.h1}>더한다</div>
        <div className={styles.p}>TheHanda</div>
      </div>

    </div>
  )
}
export default Logo