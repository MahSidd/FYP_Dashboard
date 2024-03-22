import styles from "@/app/ui/Staff/Add/add.module.css"

const AddStaff= ()=>{ 

    return(
        <div className={styles.Messages}>
         <form  className={styles.form}>
         <input type="number" placeholder="Staff Id" name="Staff Id" required />
         <input type="text" placeholder="name" name="name" required />
         <input type="text" placeholder="NIC" name="NIC" required />
         <input
          type="text"
          placeholder="Designation"
          name="Designation"
          required
        />
        <input type="email" placeholder="email" name="email" required />
        
        <input type="phone" placeholder="phone" name="phone" />
        <textarea
          name="address"
          id="address"
          rows="5"
          placeholder="Address"
        ></textarea>
         <button type="submit">Submit</button>
          </form>
        
        </div>
    )

}
export default AddStaff
