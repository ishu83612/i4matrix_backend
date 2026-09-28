import { Request, Response } from 'express';
import * as service from '../services/employee.service';

export const getAllEmployees = async (req: Request, res: Response) => {
  const employees = await service.getAll();
  res.json(employees);
};
export const getEmployee = async (req: Request, res: Response) => {
  const emp = await service.getById(req.params.id);
  res.json(emp);
};
export const createEmployee = async (req: Request, res: Response) => {
  try {
    const emp = await service.create(req.body);
    res.status(201).json(emp);
  } catch (e:any) { res.status(400).json({ error: e.message }); }
};
export const updateEmployee = async (req: Request, res: Response) => {
  const emp = await service.update(req.params.id, req.body);
  res.json(emp);
};
export const deleteEmployee = async (req: Request, res: Response) => {
  await service.remove(req.params.id);
  res.json({ message: 'Deleted' });
};