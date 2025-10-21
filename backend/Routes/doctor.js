import express from "express"
import { updateDoctor, deleteDoctor, getAllDoctor, getSingleDoctor } from "../Controllers/doctorController.js";
const router = express.Router();

router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctor);
router.delete('/:id', deleteDoctor);
router.put('/:id', updateDoctor);

export default router
