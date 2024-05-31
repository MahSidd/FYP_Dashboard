import Navbar from "../ui/Dashboard/navbar/Navbar"
import Sidebar from "../ui/Dashboard/Sidebar/Sidebar"
import styles from "../ui/Dashboard/dashboard.module.css"
import Footer from "../ui/Dashboard/footer/Footer"

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar/>
            </div>
            <div className={styles.content}>
                <Navbar/>
                { children }
                <Footer/>
            </div>

            </div>
    )
}
  
export default Layout