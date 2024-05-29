
import Search from "@/app/ui/Dashboard/Search/search"
import styles from "@/app/ui/Staff/staff.module.css"
import Link from "next/link"
import Image from "next/image";
import Pagination from "@/app/ui/Dashboard/pagination/Pagination";

import { getAllStaff } from "@/app/Dashboard/api/staff/route";

const Staffpage = async({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count, Staff}= await getAllStaff(q,page);

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
            {/* <td>Email</td> */}
            <td>Designation</td>
            <td>joining date</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
        {Staff.map((Staff) => (
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
              {/* <td>mahnoortariq@gmail.com</td> */}
              <td>{Staff.Staff_Designation}</td>
              <td>{Staff.createdAt?.toString().slice(4,16)}</td>
              <td>
                <Link href={`/Dashboard/Staff/${Staff.Staff_id}`}>
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

        <Pagination count={count}/>

      </div>
    );
  }
  
  export default Staffpage