import { MdSupervisedUserCircle } from "react-icons/md";
import styles from './Card.module.css'

const Card1 =()=>{
    return(
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24} />
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