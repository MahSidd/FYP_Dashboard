"use client"
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from '@mui/material/Button';

import styles from "@/app/ui/Staff/Add/add.module.css"
import Alert  from "@/app/ui/alert/alert";

const AddStaff= ()=>{ 
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('info');
  const showAlert = (message, type) => {

    setAlertMessage(message);
    setAlertType(type);
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000); // Hide alert after 3 seconds
  };
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
    if (!staff.Staff_name || !staff.Staff_Phone || !staff.Staff_CNIC || !staff.Staff_Address || !staff.Joining_date) {
      showAlert('All fild required to fill', 'warning');
    }else{
    const response = await fetch("http://localhost:3000/api/staff", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(staff),
      
    });

    if (response.ok) {
      // staff created successfully
      showAlert('Data Insert successfully!', 'success');
      setTimeout(() => {
        
        location.reload();
      }, 3000);
      

    } else {
      // Handle error
      showAlert('failed to create staff!', 'error');
    }
  }};

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
        <input type="text" placeholder="Joining date" name="Joining_date" value={staff?.Joining_date} onChange={onChange} />
        <textarea
          name="Staff_Address"
          rows="5"
          placeholder="Address"
          value={staff?.Staff_Address}
          onChange={onChange}
        ></textarea>
        <Button type="button" variant="contained"onClick={handleCreate}>Submit
        </Button>
       
      </form>
      {alertVisible && (
          <Alert
          message={alertMessage}
          type={alertType}
          onClose={() => setAlertVisible(false)}
          />
        )}
    </div>
  );
};

export default AddStaff
