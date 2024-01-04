require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/products");
const ProductJson = require("./product.json");

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();

        await Product.create(ProductJson);
        console.log("Products Successfully Inserted");
    }
    catch(error){
        console.log(error);
    }
}

start();