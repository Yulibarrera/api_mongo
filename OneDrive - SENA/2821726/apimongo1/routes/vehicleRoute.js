import { Router } from "express";
import { getVehicle, postVehicle, putVehicle, deleteVehicle } from "../controllers/vehicle.Controller.js";

const vehicleRouter = Router()

vehicleRouter.get('/',getVehicle)
vehicleRouter.post('/', postVehicle)
vehicleRouter.put('/', putVehicle)
vehicleRouter.delete('/', deleteVehicle)

export default vehicleRouter
