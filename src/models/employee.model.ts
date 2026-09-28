import mongoose, { Schema } from 'mongoose';
const EmployeeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  department: { type: String, required: true },
  position: { type: String, required: true },
  status: { type: String, enum: ['ACTIVE','INACTIVE'], default: 'ACTIVE' }
}, { timestamps: true });
export default mongoose.model('Employee', EmployeeSchema);