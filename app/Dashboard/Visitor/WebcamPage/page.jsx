"use client"
// import React, { useRef} from 'react'
// import Link from "next/link"
// import Webcam from "react-webcam";



// const WebcamPage = () => {
//     const webcamRef= useRef<Webcam>(null);
//     return(
//         <div>
//             <Webcam/>
//         </div>
//     )

// }
// export default WebcamPage
//scan.js

import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";
import styles from "@/app/ui/Visitor/visitor.module.css";

const WebcamPage = () => {
  const [data, setData] = useState("No result");

  return (
    <div className={styles.containerCam}>
      <div className={styles.containerCam}>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }

          } 
        }
//this is facing mode : "environment " it will open backcamera of the smartphone and if not found will 
// open the front camera
        constraints    ={{ facingMode:  "environment"  }}
          style={{ width: "40%", height: "40%" }}
        />
        <p>{data}</p>
      </div>
    </div>
  );
}

export default WebcamPage;

