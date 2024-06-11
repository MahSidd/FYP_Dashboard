"use client";

import { useEffect, useState } from "react";
import * as React from 'react';

import styles from './Card.module.css';
import Image from "next/image";
import Complains from "@/app/Dashboard/Complains/page";

const Card3 = () => {
  const [complains, setComplains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentMonthComplains, setCurrentMonthComplains] = useState([]);
  const [previousMonthComplains, setPreviousMonthComplains] = useState([]);

  useEffect(() => {
    const fetchComplains = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/Complain`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setComplains(data);

        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        const prevDate = new Date(currentDate);
        prevDate.setMonth(currentDate.getMonth() - 1);
        const prevMonth = prevDate.getMonth();
        const prevYear = prevDate.getFullYear();

        const isSameMonth = (date1, date2) =>
          date1.getMonth() === date2.getMonth() &&
          date1.getFullYear() === date2.getFullYear();

        const currentMonthComplains = data.filter(complains => {
          const createdAt = new Date(complains.createdAt);
          return isSameMonth(createdAt, currentDate);
        });

        const previousMonthComplains = data.filter(complains => {
          const createdAt = new Date(complains.createdAt);
          return isSameMonth(createdAt, prevDate);
        });

        setCurrentMonthComplains(currentMonthComplains);
        setPreviousMonthComplains(previousMonthComplains);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchComplains();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const currentMonthCount = currentMonthComplains.length;
  const previousMonthCount = previousMonthComplains.length;
  const percentageChange =
    previousMonthCount === 0 ? 0 : (((currentMonthCount - previousMonthCount) / previousMonthCount) * 100);

  return (
    <div className={styles.container}>
      <Image src='/ic main.png' alt="complain" width="20" height="20" />
      <div className={styles.texts}>
        <span className={styles.title}>Complaints</span>
        <span className={styles.number}>{complains.length}</span>
        <span className={styles.details}>
          <span className={percentageChange >= 0 ? styles.positive : styles.negative}>
            {percentageChange.toFixed(2)}%
          </span>
          {percentageChange >= 0 ? ' more' : ' less'} than prev month
        </span>
      </div>
    </div>
  );
};

export default Card3;
