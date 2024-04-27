"use client"
import Search from "@/app/ui/Dashboard/Search/Search"
import styles from "@/app/ui/Complain/complain.module.css"
import Link from "next/link"
import Image from "next/image";
import Pagination from "@/app/ui/Dashboard/pagination/Pagination";
import React, { useState, useEffect } from 'react';

const Complains = () => {
  const [ComplainList, setComplainList] = useState([]);

  useEffect(() => {
    fetch('/app/api/Complain')
      .then((response) => response.json())
      .then((data) => setComplainList(data));
  }, []);
    
  return (
    <div className={styles.container}>
      <div className={styles.top}>
      <Search placeholder="Search Complain Number"/>
      
     
      </div>
      <table className={styles.table}>
      <thead>
        <tr>
          <td>Name</td>
          <td>Complain</td>
          <td>Status</td>
          <td>Complain Date</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
      {ComplainList.map((Complain) => (

        <tr key={Complain.Complain_No}>
          <td>
          <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Mahnoor Tariq
            </div>
          </td>
            <td>Saverage</td>
            <td>
            <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>1-feb-2024</td>
            <td>
            <Link href="/Dashboard/Complains/test">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
            </td>
        </tr>
        ))}
      </tbody>
        

      </table>

      <Pagination/>

    </div>
  );
}
  
export default Complains
  