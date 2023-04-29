import User from '../../../models/User'
import connectToMongo from '../../../middleware/db'
var CryptoJS = require("crypto-js");
var AES = require("crypto-js/aes");


const handler = async(req,res)=>{
    if(req.methord == undefined){
        const {name, email, password} = req.body
        try {
            let u = new User({
                name: name,
                email: email,
                password: CryptoJS.AES.encrypt(password, process.env.AES_SECRET).toString()
            })
            await u.save()
            res.status(200).json({success: "success"})
        } catch (error) {
            res.status(400).json({error})
        }
    }
    else{
        res.status(400).json({error: 'This Methord does not exist'})
    }
}
export default connectToMongo(handler);