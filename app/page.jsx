import styles from "@/app/ui/Login/login.module.css"
import Link from "next/link"
const Login = () => {
    return (
      <div className={styles.container}>
        <form action="" className={styles.form}>
          <h1>Login</h1>
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