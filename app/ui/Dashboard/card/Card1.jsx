import { MdSupervisedUserCircle } from "react-icons/md";
import styles from './Card.module.css'
import Image from "next/image"

const Card1 =()=>{
    return(
        <div className={styles.container}>
           <Image src='/Group.png' alt="Visitor" width="20" height="20"/>
            <div className={styles.texts}>
                <span className={styles.title}>Visitor</span>
                <span className={styles.number}>10</span>
                <span className={styles.details}>
                    <span className={styles.negative}>7%</span>
                    more than prev month
                </span>

            </div>
             

        </div>
        
        
    )
}
 export default Card1