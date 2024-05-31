import styles from "@/app/ui/Complain/SingleComplain/singlecomplain.module.css"
import Image from "next/image";

const SingleEvent= ()=>{ 

    return(
        <div className={styles.container}>
        <div className={styles.formContainer}>
        <form className={styles.form}>
        <label> CNIC</label>
        <input type="text" name="ID" placeholder="42401-xxxxxxxxx"/>
        <label>Name</label>
        <input type="text" name="Name" placeholder="Mahnoor"/>
        <label>Phone</label>
        <input type="text" name="Phone" placeholder="0316-xxxxxxx"/>
        <label>Date</label>
        <input type="date" name="date" placeholder=""/>
        <label>Time</label>
        <input type="text" name="time" placeholder="11:30am-4:00pm"/>
        <label>Address</label>
        <input type="text" name="Address" placeholder="Karchi,Pakistan"/>
        <label>Details</label>
        <textarea
          name="Description"
          id="Description"
          rows="5"
          placeholder="Description"
        ></textarea>


        </form>
        </div>
        </div>
          
    );
  };
    
export default SingleEvent
