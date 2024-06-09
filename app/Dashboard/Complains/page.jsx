import Search from "@/app/ui/Dashboard/Search/Search";
import styles from "@/app/ui/Complain/complain.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/Dashboard/pagination/Pagination";

import { getAllCOmplain } from "@/app/api/Complain/route";

const Complains = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, Complain } = await getAllCOmplain(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search Complain Number" />
      </div>
      <table className={styles.table} >
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
          {Complain.map((Complain) => (
            <tr key={Complain.Complain_No}>
              <td>
                <div className={styles.user}>
                  {`${Complain.User.fname} ${Complain.User.lname}`}
                </div>
              </td>
              <td>{Complain.Complain}</td>

              <td>
                {Complain.status === "pending" && (
                  <span className={`${styles.status} ${styles.pending}`}>
                    {Complain.status}
                  </span>
                )}
                {Complain.status === "Approved" && (
                  <span className={`${styles.status} ${styles.done}`}>
                    {Complain.status}
                  </span>
                )}
                {Complain.status === "Rejected" && (
                  <span className={`${styles.status} ${styles.cancelled}`}>
                    {Complain.status}
                  </span>
                )}
              </td>
              <td>{Complain.createdAt?.toString().slice(4, 16)}</td>
              <td>
                <Link href={`/Dashboard/Complains/${Complain.Complain_No}`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination Pagination count={count} />
    </div>
  );
};

export default Complains;
