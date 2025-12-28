import express from "express"
import { getUserData, loginUser, regUser } from "../controllers/userController.js"
import { protect } from "../middleWare/auth.js";

const userRouter = express.Router();

userRouter.post('/register', regUser);
userRouter.post('/login', loginUser)
userRouter.get('/data',protect,getUserData)

export default userRouter;