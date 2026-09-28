import express from 'express';
import cors from 'cors';
import employeeRoutes from './routes/employee.routes';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/employees', employeeRoutes);
app.get('/', (req,res)=> res.send('i4Matrix API Running'));
export default app;