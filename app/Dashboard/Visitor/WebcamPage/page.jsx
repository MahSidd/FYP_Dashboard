"use client"
import React, { useRef} from 'react'
import Link from "next/link"
import Webcam from "react-webcam";



const WebcamPage = () => {
    const webcamRef= useRef<Webcam>(null);
    return(
        <div>
            <Webcam/>
        </div>
    )

}
export default WebcamPage
