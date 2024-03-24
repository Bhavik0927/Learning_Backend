import { User } from "../models/user.js";

export const getAllUsers = async (req,res) =>{

    const users = await User.find({})

    console.log(req.query);

    const keyword = req.query.keyword;
    console.log(keyword)

    res.json({
        success:true,
        users
    })
}

export const RegisterUser = async (req,res) =>{

    const {name,email,password} = req.body;

    await User.create({ name, email, password })

    res.status(201).json({
        success:true,
        message:"Register Successfully"
    })
}

export const SpecialFunc = (req,res) =>{
    res.json({
        success:true,
        message: "Just Jocking"
    })
}

export const GetById = async (req,res) =>{
    const { id } = req.params;
    const user = await User.findById(id)
    // console.log(req.params);
    res.json({
        success: true,
        user,
    })
}