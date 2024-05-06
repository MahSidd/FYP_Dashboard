import { MdSupervisedUserCircle } from "react-icons/md";
import styles from './Card.module.css'
import Image from "next/image"

const Card2 =()=>{
    return(
        <div className={styles.container}>
            <Image src='/Vector.png' alt="Event" width="20" height="20"/>
            <div className={styles.texts}>
                <span className={styles.title}>Total Events</span>
                <span className={styles.number}>10</span>
                <span className={styles.details}>
                    <span className={styles.positive}>12%</span>
                    more than prev month
                </span>

            </div>
             

        </div>
        
        
    )
}
 export default Card2