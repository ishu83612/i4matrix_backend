import { Router } from 'express';
import * as c from '../controllers/employee.controller';
const router = Router();
router.get('/', c.getAllEmployees);
router.get('/:id', c.getEmployee);
router.post('/', c.createEmployee);
router.put('/:id', c.updateEmployee);
router.delete('/:id', c.deleteEmployee);
export default router;