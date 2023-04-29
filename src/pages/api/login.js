import User from '../../../models/User'
import connectToMongo from '../../../middleware/db'
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.methord == undefined) {
        try {
            let u = await User.findOne({
                email: req.body.email
            })
            var bytes = CryptoJS.AES.decrypt(u.password, process.env.AES_SECRET);
            var password = bytes.toString(CryptoJS.enc.Utf8);
            if (req.body.password === password) {
                var token = jwt.sign({ name: u.name, email: u.email }, process.env.JWT_SECRET, { expiresIn: '2d' });
                res.status(200).json({ success: true, token })
            }
            else {
                res.status(200).json({ success: false, error: "Wrong Credentials" })
            }
        } catch (error) {
            res.status(400).json({ success:false, error })
        }
    }
    else {
        res.status(400).json({ error: 'This Methord does not exist' })
    }
}
export default connectToMongo(handler);