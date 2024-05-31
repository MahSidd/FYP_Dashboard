"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Webcam from "react-webcam";
import styles from "@/app/ui/Visitor/visitor.module.css";

const Visitor = () => {
  return (
    <Link href="/Dashboard/Visitor/WebcamPage">
      <button className={styles.Cambtn}>Camera</button>
    </Link>
  );
};
export default Visitor;
