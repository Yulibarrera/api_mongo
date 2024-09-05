import express, { json } from 'express'
import dbConnection from '../database/config.js'
import '../database/config.js'
import vehicleRouter from '../routes/vehicleRoute.js'
import userRoute  from '../routes/userRoute.js'
import authRouter from '../routes/authRouth.js'


class Server{
    constructor(){
    this.app = express()
    this.listen()
    this.dbConnection()
    this.pathVehicle = "/api/vehicle"
    this.pathOwner = "/api/owner"
    this.route()
    }

    route (){
        this.app.use(json());
        this.app.use( cors() );
        this.app.use(this.pathVehicle, vehicleRouter);
        this.app.use('/api/User', userRoute);
        this.app.use('/login', authRouter)
    }

    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running`)
        })
    }

    async dbConnection(){ // call connet to database
        await dbConnection()
    }
}


export default Server