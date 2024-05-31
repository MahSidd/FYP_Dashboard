import styles from "@/app/ui/Login/login.module.css"
import Link from "next/link"
import Image from "next/image"
 
const Login= ()=> {
  

 
  return (
    <div className={styles.container}>
       
    <form action="" className={styles.form}>
   
    <Image className={styles.logo} src='/Smart-Living-Logo(AI)-01.png' alt="" width="150" height="150"/>
      
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password"/>
      <Link href="/Dashboard">
      <button> Login </button>
      </Link>
    </form>
    </div>
)
}
export default Login