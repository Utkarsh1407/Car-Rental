import express from "express"
import cors from "cors"
import "dotenv/config";
import connectDb from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

const app = express();

await connectDb();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("server is running")
});

app.use('/api/user', userRouter)
app.use('/api/owner',ownerRouter)
app.use('/api/booking',bookingRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})

