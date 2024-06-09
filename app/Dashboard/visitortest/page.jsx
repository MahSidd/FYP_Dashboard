"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from '@mui/material/Button';
import Link from "next/link"

import Alert from "@/app/ui/alert/alert";

const Visitortest = () => {
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
  const [Visitor, setVisitor] = useState({
    Guest_NO:'',
    Guest_CNIC: '',
    Guest_Name: '',
    Vehicle_Plate: '',
    User_Id: '',
  });

  const onChange = (e) => {
    setVisitor({ ...Visitor, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    if (!Visitor.Guest_Name || !Visitor.Guest_CNIC || !Visitor.User_Id || !Visitor.Vehicle_Plate) {
      showAlert('All fields are required to fill', 'warning');
    } else {
      // Parse User_Id to integer
      const formData = {
        ...Visitor,
        User_Id: parseInt(Visitor.User_Id, 10)
      };

      const response = await fetch("http://localhost:3000/api/vistorTest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Visitor created successfully
        showAlert('Data Inserted successfully!', 'success');
        setTimeout(() => {
          location.reload();
        }, 3000);
      } else {
        // Handle error
        showAlert('Failed to create Visitor!', 'error');
      }
    }
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="name" name="Guest_Name" value={Visitor?.Guest_Name} onChange={onChange} />
        <input type="text" placeholder="Cnic" name="Guest_CNIC" value={Visitor?.Guest_CNIC} onChange={onChange} />
        <input type="text" placeholder="vehicle plate" name="Vehicle_Plate" value={Visitor?.Vehicle_Plate} onChange={onChange} />
        <input
          type="number"
          id="User_Id"
          name="User_Id"
          value={Visitor?.User_Id}
          onChange={onChange}
        />
        
      </form>

      {alertVisible && (
        <Alert
          message={alertMessage}
          type={alertType}
          onClose={() => setAlertVisible(false)}
        />
      )}
      <Button type="button" variant="contained" onClick={handleCreate}>Submit</Button>
        <Link href={`/Dashboard/Visitortest/${Visitor.Guest_NO}`}>
                    <button>
                      View
                    </button>
        </Link>
    </div>
    
  );
};

export default Visitortest;
