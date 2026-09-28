import Employee from '../models/employee.model';
export const getAll = () => Employee.find();
export const getById = (id: string) => Employee.findById(id);
export const create = (data: any) => Employee.create(data);
export const update = (id: string, data: any) => Employee.findByIdAndUpdate(id, data, { new: true });
export const remove = (id: string) => Employee.findByIdAndDelete(id);