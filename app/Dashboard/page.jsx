import Card1 from "../ui/Dashboard/card/Card1"
import Card2 from "../ui/Dashboard/card/Card2"
import Card3 from "../ui/Dashboard/card/Card3"
import Chart from "../ui/Dashboard/chart/Chart"
import Complain from "../ui/Dashboard/compSec/ComplainSec"
import styles from "../ui/Dashboard/dashboard.module.css"
import Rightbar from "../ui/Dashboard/rightbar/Rightbar"
const Dashboard = () => {
    return (
      <div className={styles.wrapper}>
         <div className={styles.main}>
           <div className={styles.Card}>
             <Card1/>
             <Card2/>
             <Card3/>
           </div>
           <Complain/>
           <Chart/>
         </div>
         <div className={styles.right}>
          <Rightbar/>

         </div>
    </div>

    )
  }
  
  export default Dashboard