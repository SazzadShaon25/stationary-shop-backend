import mongoose from "mongoose";
import app from "./app";

const port = 5000;

async function main() {
    try{
        await mongoose.connect('mongodb+srv://stationary-shop-admin:3jTUFE8TswPC5qu2@cluster0.richl.mongodb.net/stationary-shop?retryWrites=true&w=majority&appName=Cluster0');
        app.listen(port, ()=>{
            console.log(`listening on port ${port}`)
        })
    }catch(error)
    {
        console.log(error)
    }
}

main();