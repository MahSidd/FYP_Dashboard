import { MdSupervisedUserCircle } from "react-icons/md";
import styles from './Card.module.css'

const Card3 =()=>{
    return(
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24} />
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