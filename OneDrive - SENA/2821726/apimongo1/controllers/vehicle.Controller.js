import Vehicle from '../models/vehicle.js'

//method GET
export async function getVehicle (req, res) {
    const vehicles =await Vehicle.find()
    res.json({vehicles})
};

export async function postVehicle (req, res) {
    let msg = 'vehicle inserted'
    const body = req.body
    try{
        const vehicle = new Vehicle (body)
        await vehicle.save()//insert in database 
    }
    catch(error){
        msg=error
    }
    res.json({msg:msg})
};

export async function putVehicle (req, res){
    let msg = 'vehicle updated'
    const {plate, color, model} = req.body
    try{
        await Vehicle.findOneAndUpdate({plate:plate},{color:color, model:model})
    }
    catch(error){
        msg=error
    }
    res.json({msg:msg})
};


export async function deleteVehicle (req, res) {
    let msg = 'Vehicle delete'
    id = req.params.id
    try{
        await Vehicle.findByIdAndDelete({_id:id})
    }catch(error){
        msg = 'There was a problem while deleting'
    }
    res.json({msg:msg})
};

