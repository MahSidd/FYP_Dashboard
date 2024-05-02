import styles from "@/app/ui/Complain/SingleComplain/singlecomplain.module.css"
import Image from "next/image";

const SingleComplain= ()=>{ 

    return(
        <div className={styles.container}>
        <div className={styles.formContainer}>
        <form className={styles.form}>
        <label>Complain No</label>
        <input type="number" name="ID" placeholder="1001"/>
        <label>Name</label>
        <input type="text" name="Name" placeholder="Mahnoor"/>
        <label>NIC No</label>
        <input type="text" name="NIC" placeholder="42401-xxxxxxxxx"/>
       
        <label>Phone</label>
        <input type="text" name="Phone" placeholder="0316-xxxxxxx"/>
        <label>Complain Type</label>
        <input type="text" name="Complain" placeholder="Saverage"/>
        <label>Address</label>
        <input type="text" name="Address" placeholder="Karchi,Pakistan"/>
        <label>Description</label>
        <textarea
          name="Description"
          id="Description"
          rows="5"
          placeholder="Description"
        ></textarea>
         <div className={styles.btn}>
        <button>Approve</button>
        <button id={styles.edit}>Reject</button>
        </div>

  
        </form>
        </div>
        </div>
          
    );
  };
    
export default SingleComplain
