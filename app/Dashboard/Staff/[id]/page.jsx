"use client"
import styles from "@/app/ui/Staff/SingleUser/singleuser.module.css"
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SingleUser= ({params})=>{ 
  const edit= false;
 
  const router = useRouter();
  const { id } = params;

  

  const [staff, setstaff] = useState({
    Staff_id :'',
    Staff_name: '',
    Staff_CNIC: '',
    Staff_Phone: '',
    Staff_Designation: '',
    Staff_Address: '',
    Joining_date: '',
  });

  const onChange = (e) => {
    setstaff({ ...staff, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchstaff = async () => {
      const response = await fetch(`http://localhost:3000/api/staff/${id}`);
      const data = await response.json();
      setstaff(data);
       
    };

    if (id) {
      fetchstaff();
      
    }
  }, [id]);

  const handleUpdate = async () => {
    const response = await fetch(`http://localhost:3000/api/staff/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(staff),
    });

    if (response.ok) {
      // staff update successfully
      alert("staff has been updated");
    } else {
      // Handle error
      alert("Failed to edit staff");
    }
    location.reload();
  };

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
        <input type="number" name="Staff_name" value={staff?.Staff_id} onChange={onChange} disabled={edit}/>
        <label>Name</label>
        <input type="text"  name="Staff_name" value={staff?.Staff_name} onChange={onChange} disabled={edit}/>
        <label>NIC No</label>
        <input type="text"  name="Staff_CNIC" value={staff?.Staff_CNIC} onChange={onChange}  disabled={edit}/>
        <label>Designation</label>
        <input type="text" name="Staff_Designation"
          value={staff?.Staff_Designation}
          onChange={onChange}
          disabled={edit}/>
        {/* <label>Email</label> */}
        {/* <input type="text" name="Email" placeholder="mahnoortariq@gmail.com"/> */}
        <label>Phone</label>
        <input type="text" name="Staff_Phone" value={staff?.Staff_Phone} onChange={onChange}  disabled={edit}/>
        <label>Address</label>
        <textarea
          name="Staff_Address"
          rows="5"
          disabled={edit}
          value={staff?.Staff_Address}
          onChange={onChange}
        ></textarea>
        <div className={styles.btn}>
        <button  type="button"
            onClick={handleUpdate}>Update</button>
        {/* <button   id={styles.edit}>Edit</button> */}
        </div>


        </form>
        </div>
        </div>
          
    );
  };
    
export default SingleUser
