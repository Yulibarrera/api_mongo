import bcrypt from 'bcryptjs'
import User from '../models/user.js'

export async function postUser (req, res){
    const body = req.body
    try{
        const user = new User(body)
        user.password = await bcrypt.hash(body.password, 10)
        await user.save()
        res.status(200).json({msg: 'User created successfully'})
    }
    catch(error){
        res.status(500).json({msg: 'There was problem creating the user '})
        console.log(error)
    }
}

export async function login(req, res){
    const {email, password}= req.body
    try{
        const user = await User.find(email)
        if(!user){//no encontro al usuario 
            res.status(404).json({msg:'Email or password dont found.'})
        }
        else{
            const userLogged = await bcrypt.compare(password, User.password)//comparar claves 
            if (userLogged){
                res.status(200).json({msg:'Logged'})
            }else{
                res.status(404).json({msg:'Email or password dont found.'})
            }
        }
    }catch(error){

    }
}