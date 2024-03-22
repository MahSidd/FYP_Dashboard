// server.js

const app = next({})

import express from 'express';

import { createStaff, getAllStaff, updateStaff, deleteStaff } from './app/api/staff/route';

const app = express();
app.use(express.json());
app.post('/api/staff', createStaff);
app.get('/api/staff', getAllStaff);
app.put('/api/staff/:id', updateStaff);
app.delete('/api/staff/:id', deleteStaff);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
