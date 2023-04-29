import Product from '../../../models/Product'
import connectToMongo from '../../../middleware/db'

const handler = async(req,res)=>{
    if(req.methord == undefined){
        for(let i=0; i<req.body.length; i++){
            let p = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                category: req.body[i].category,
                img: req.body[i].img,
                size: req.body[i].size,
                color: req.body[i].color,
                price: req.body[i].price,
                availableQty: req.body[i].availableQty,
            })
            await p.save()
        }
        res.status(200).json({success: "success"})
    }
    else{
        res.status(400).json({error: 'This Methord does not exist'})
    }
}
export default connectToMongo(handler);


