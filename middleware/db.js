const mongoose = require('mongoose')

const connectToMongo = handler => async (req, res)=>{
    if (mongoose.connections[0].readyState) {
        return handler(req, res)
    }
    await mongoose.connect(process.env.MONGO_URI);
    return handler(res, req)
}

module.exports = connectToMongo;