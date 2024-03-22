import Search from "@/app/ui/Dashboard/Search/Search"
import styles from "@/app/ui/Event/event.module.css"
import Link from "next/link"
import Image from "next/image";
import Pagination from "@/app/ui/Dashboard/pagination/Pagination";


const Events = () => {
    return (
        <div className={styles.container}>
          <div className={styles.top}>
          <Search placeholder="Search Event Num"/>
          
         
          </div>
          <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Event</td>
              <td>Status</td>
              <td>Booking</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
              <div className={styles.user}>
                    <Image
                      src="/noavatar.png"
                      alt=""
                      width={40}
                      height={40}
                      className={styles.userImage}
                    />
                    Mahnoor Tariq
                </div>
              </td>
                <td>Birthday</td>
                <td>
                <span className={`${styles.status} ${styles.pending}`}>
                    Booked
                  </span>
                </td>
                <td>1-feb-2024</td>
                <td>
                <Link href="/Dashboard/Events/test">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                </td>
            </tr>
          </tbody>
            
    
          </table>
    
          <Pagination/>
    
        </div>
      );
    }
  
export default Events
  