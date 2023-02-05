import * as yup from "yup"
import User from "../models/user"
import {v4} from "uuid"

class UsersController{
    async store(req,res){

        const schema = yup.object().shape({
            name:yup.string().required(),
            email:yup.string().email().required(),
            password:yup.string().required().min(6)
        })


        try {
            await schema.validateSync(req.body, {abortEarly:false})
        } catch (error) {
            console.log(error);
            return res.status(400).json({error:error.errors})
        }

        const {name, email, password} = req.body


        const emailExist = await User.findOne({where:{email:email}})

        if(emailExist){
            return res.status(400).json("Email já está sendo usado")
        }

        try {
            const newUser = await User.create({
                id: v4(),
                name,
                email,
                password
            })
            return res.status(201).json({id:newUser.id, name,email})

        } catch (err) {
            return res.status(400).json({error:err.errors})
        }

    }
}


export default new UsersController()