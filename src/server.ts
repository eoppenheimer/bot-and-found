import app from "./app";
import dotenv from "dotenv";
import {mongoConnection, ObjectId} from "./config";
dotenv.config();

const PORT = process.env.PORT || 8080;

mongoConnection.connect().then(()=>{

    app.listen(PORT, async () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    
        
    });

    setInterval(()=>{
        console.log("Refreshing database...");
    }, 1000 * 60 * 60); // every 1hr check if you need to refresh the database.
});
