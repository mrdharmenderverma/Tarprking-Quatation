require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();

const product_routes = require("./routers/ProductRoutes");
const vendor_routes = require("./routers/VendorRoutes");
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Welcome to Tar Parking Quotation Backend");
})

// middleware or set the routes 

// app.use('/api', ApiAuthenticate);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api", product_routes);  // middleware routes for Products
app.use("/api", vendor_routes);  // middleware routes for Vendors


const TarParkingQuotation = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () =>{
            console.log(`Server is Listening on PORT: ${PORT}`);
        })
    }
    catch(e){
        console.log(e);
    }
}

TarParkingQuotation()