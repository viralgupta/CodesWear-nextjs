import Product from '../../../models/Product'
import connectToMongo from '../../../middleware/db'

const handler = async (req, res) => {
    if (req.methord == undefined) {
        for (let i = 0; i < req.body.length; i++) {
            let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])
        }
        res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: 'This Methord does not exist' })
    }
}
export default connectToMongo(handler);


