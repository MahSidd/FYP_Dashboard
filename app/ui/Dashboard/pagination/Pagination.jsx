"use client";


import styles from './Pagination.module.css'
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({count}) => {
  const searchParams= useSearchParams();
  const pathname= usePathname();
  const {replace}= useRouter();

  const page= searchParams.get("page")|| 1;

  const params = new URLSearchParams(searchParams);
  const item_per_page=2;
  const prevPage= item_per_page*(parseInt(page)-1)>0
  const nextPage=item_per_page*(parseInt(page)-1) + item_per_page < count;
  //onclic func
  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };


    return (
      <div className={styles.container}> 
      <button className={styles.button} disabled={!prevPage} onClick={() => handleChangePage("prev")}> Previous</button>
      <button className={styles.button} disabled={!nextPage} onClick={() => handleChangePage("next")} >Next</button>

      </div>
    );
  };
  
export default Pagination
