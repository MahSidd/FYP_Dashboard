import styles from "@/app/ui/Staff/SingleUser/singleuser.module.css"
import Image from "next/image";

const SingleUser= ()=>{ 

    return(
        <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src= "/noavatar.png" alt="" fill />
          </div>
          Mahnoor
        </div>
        <div className={styles.formContainer}>
        <form className={styles.form}>
        <label>Staff ID</label>
        <input type="number" name="ID" placeholder="1001"/>
        <label>Name</label>
        <input type="text" name="Name" placeholder="Mahnoor"/>
        <label>NIC No</label>
        <input type="text" name="NIC" placeholder="42401-xxxxxxxxx"/>
        <label>Designation</label>
        <input type="text" name="Designation" placeholder="Administrator"/>
        <label>Email</label>
        <input type="email" name="Email" placeholder="mahnoortariq@gmail.com"/>
        <label>Phone</label>
        <input type="text" name="Phone" placeholder="0316-xxxxxxx"/>
        <label>Address</label>
        <input type="text" name="Address" placeholder="Karchi,Pakistan"/>
        <div className={styles.btn}>
        <button>Update</button>
        <button id={styles.edit}>Edit</button>
        </div>


        </form>
        </div>
        </div>
          
    );
  };
    
export default SingleUser
