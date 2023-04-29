import Product from '../../../models/Product'
import connectToMongo from '../../../middleware/db'

const handler = async (req, res) => {
    res.status(200).json({body: req.body})
}
export default connectToMongo(handler);


