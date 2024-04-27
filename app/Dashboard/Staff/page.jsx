
import Search from "@/app/ui/Dashboard/Search/Search"
import styles from "@/app/ui/Staff/staff.module.css"
import Link from "next/link"
import Image from "next/image";
import Pagination from "@/app/ui/Dashboard/pagination/Pagination";

import { getAllStaff } from "@/app/api/staff/route";

const Staffpage = async() => {
  const staffList= await getAllStaff();
  console.log(staffList);

    return (
      <div className={styles.container}>
        <div className={styles.top}>
        <Search placeholder="Search for User.."/>
          
        <Link href="/Dashboard/Staff/Add">

        <button className={styles.addButton}>Add New</button>
        </Link>
        </div>
        <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Id</td>
            {/* <td>Email</td> */}
            <td>Designation</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
        {staffList.map((Staff) => (
            <tr key={Staff.Staff_id}>
            <td>
            <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {Staff.Staff_name}
              </div>
            </td>
              <td>{Staff.Staff_id}</td>
              {/* <td>mahnoortariq@gmail.com</td> */}
              <td>{Staff.Staff_Designation}</td>
              <td>
                <Link href='/Dashboard/Staff/test'>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
              </td>
          </tr>
          ))}
        </tbody>

        </table>

        <Pagination/>

      </div>
    );
  }
  
  export default Staffpage