"use client";

import { useEffect, useState } from "react";
import * as React from 'react';
import styles from './compnotification.module.css';

const Compnotification = () => {
  const [Complain, setComplain] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComplain = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/Complain`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // Filter the complaints to only include those with status 'pending'
        const pendingComplaints = data.filter(complain => complain.status === 'pending').slice(0, 10);
        setComplain(pendingComplaints);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchComplain();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <span className={styles.title}>Pending Complains</span>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Complain_No</td>
              <td>Complain</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {Complain.map((complain) => (
              <tr key={complain.Complain_No}>
                <td>{complain.Complain_No}</td>
                <td>{complain.Complain}</td>
                <td>{complain.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Compnotification;
