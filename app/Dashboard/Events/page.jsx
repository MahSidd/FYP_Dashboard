import Search from "@/app/ui/Dashboard/Search/Search"
import styles from "@/app/ui/Event/event.module.css"
import Link from "next/link"
import Image from "next/image";
import Pagination from "@/app/ui/Dashboard/pagination/Pagination";
import {getAllEvent} from "@/app/Dashboard/api/Event/get"


const Events = async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count, event}= await getAllEvent(q,page);
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
          {event.map((event) => (
            <tr key={event.Event_Id}>
              <td>
              <div className={styles.user}>
                    
              { `${event.User.fname} ${event.User.lname}`}
                </div>
              </td>
                <td>{event.Name}</td>
                <td>
                <span className={`${styles.status} ${styles.pending}`}>
                    {event.Status}
                  </span>
                </td>
                <td>{event.Date}</td>
                <td>
                <Link href={`/Dashboard/Events/${event.Event_Id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                </td>
            </tr>
          ))}
          </tbody>
    
          </table>
    
          <Pagination Pagination count={count}/>
    
        </div>
      );
    }
  
export default Events
  