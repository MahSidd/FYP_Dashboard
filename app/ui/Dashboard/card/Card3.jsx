import { MdSupervisedUserCircle } from "react-icons/md";
import styles from './Card.module.css'
import Image from "next/image"

const Card3 =()=>{
    return(
        <div className={styles.container}>
            <Image src='/fire ic.png' alt="Fire" width="20" height="20"/>
            <div className={styles.texts}>
                <span className={styles.title}>Fire Alert</span>
                <span className={styles.number}>10</span>
                <span className={styles.details}>
                    <span className={styles.negative}>5%</span>
                    more than prev month
                </span>

            </div>
             

        </div>
        
        
    )
}
 export default Card3