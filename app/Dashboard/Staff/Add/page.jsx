"use client"
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState } from "react";

import styles from "@/app/ui/Staff/Add/add.module.css"

const AddStaff= ()=>{ 
  const router = useRouter();
  const [staff, setstaff] = useState({
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

  const handleCreate = async () => {
    const response = await fetch("/api/staff/createstaff", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(staff),
    });

    if (response.ok) {
      // staff created successfully
      router.push("/");
    } else {
      // Handle error
      alert("Failed to create staff");
    }
  };

  return (
    <div className={styles.Messages}>
      <form className={styles.form} >
        <input type="text" placeholder="name" name="Staff_name" value={staff?.Staff_name} onChange={onChange} />
        <input type="text" placeholder="Cnic" name="Staff_CNIC" value={staff?.Staff_CNIC} onChange={onChange} />
        <input type="text" placeholder="Phone" name="Staff_Phone" value={staff?.Staff_Phone} onChange={onChange} />
        <input
          type="text"
          placeholder="Designation"
          name="Staff_Designation"
          value={staff?.Staff_Designation}
          onChange={onChange}
       
        />
        <input type="texr" placeholder="Joining date" name="Joining_date" value={staff?.Joining_date} onChange={onChange} />
        <textarea
          name="Staff_Address"
          rows="5"
          placeholder="Address"
          value={staff?.Staff_Address}
          onChange={onChange}
        ></textarea>
        <button type="button" onClick={handleCreate}>Submit</button>
      </form>
    </div>
  );
};

export default AddStaff
