"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import {
  DataGridPremium,
  GridToolbar,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from '@mui/x-data-grid-premium';

const Alert = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiRef = useGridApiRef();

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/staff`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setStaff(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchStaff();
  }, []);

  const getRowId = (row) => row.Staff_id; // Custom getRowId function

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      rowGrouping: {
        model: ['Staff_name'],
      },
    
    },
  });

  const columns = [
    { field: 'Staff_id', headerName: 'ID', width: 90 },
    { field: 'Staff_name', headerName: 'Name', width: 150, editable: true },
    { field: 'Staff_CNIC', headerName: 'CNIC', width: 150, editable: true },
    { field: 'Staff_Phone', headerName: 'Phone', width: 150, editable: true },
    { field: 'Staff_Designation', headerName: 'Designation', width: 150, editable: true },
    { field: 'Staff_Address', headerName: 'Address', width: 200, editable: true },
    { field: 'Joining_date', headerName: 'Joining Date', width: 150, editable: true },
    { field: 'updatedAt', headerName: 'Updated At', width: 150, editable: true },
    { field: 'createdAt', headerName: 'Created At', width: 150, editable: true },
  ];

  return (
    <div>
        
    <Box sx={{ height: 520, width: '100%' }}>
      <DataGridPremium
        rows={staff}
        columns={columns}
        getRowId={getRowId} // Provide custom getRowId function
        apiRef={apiRef}
        loading={loading}
        disableRowSelectionOnClick
        initialState={initialState}
        slots={{ toolbar: GridToolbar }}
        
        />
    </Box>
  </div>
  );
};

export default Alert;
