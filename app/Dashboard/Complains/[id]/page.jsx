"use client"
import styles from "@/app/ui/Complain/SingleComplain/singlecomplain.module.css"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SingleComplain= ({params})=>{ 

 
  const router = useRouter();
  const { id } = params;

  const [complain, setComplain] = useState({
    Complain_No: '',
    Complain: '',
    User_Id: '',
    Description: '',
    status: '',
    User: {
        User_Id: '',
        Email: '',
        Phone: '',
        fname: '',
        lname: '',
        CNIC: '',}
  
    });

 

  useEffect(() => {
    const fetchcomplain = async () => {
      const response = await fetch(`http://localhost:3000/api/Complain/${id}`);
      const data = await response.json();
      setComplain(data);
       
    };

    if (id) {
      fetchcomplain();
      
    }
  }, [id]);

  const handleUpdate = async (action) => {
    
    const response = await fetch(`http://localhost:3000/api/Complain/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action),
    });

    if (response.ok) {
      // staff update successfully
      alert("Complain has been updated");
    } else {
      // Handle error
      alert("Failed to edit Complain");
    }
    router.push("/Dashboard/Complains");
  };

    return(
        <div className={styles.container}>
        <div className={styles.formContainer}>
        <form className={styles.form}>
        <label>Complain No</label>
        <input type="int"  value={complain.Complain_No} />
        <label>First Name</label>
        <input type="text"  value={`${complain.User.fname} `}/>
        <label>Last name</label>
        <input type="text"  value={`${complain.User.lname} `}/>
        <label>NIC No</label>
        <input type="text"  value={complain.User.CNIC} />
       
        <label>Phone</label>
        <input type="text" value={complain.User.Phone} />
        <label>Complain Type</label>
        <input type="text" value={complain.Complain} />
     
        <label>Description</label>
        <textarea
          type="text"  value={complain.Description}  ></textarea>
         <div className={styles.btn}>
        <button type="button"
             onClick={()=> handleUpdate ('approve')}>approve</button>
        <button id={styles.edit}  onClick={()=> handleUpdate ('reject')}>Reject</button>
        </div>

  
        </form>
        </div>
        </div>
          
    );
  };
    
export default SingleComplain
