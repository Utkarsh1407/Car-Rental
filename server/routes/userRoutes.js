import express from "express"
import { getCars, getUserData, loginUser, regUser } from "../controllers/userController.js"
import { protect } from "../middleWare/auth.js";

const userRouter = express.Router();

userRouter.post('/register', regUser);
userRouter.post('/login', loginUser)
userRouter.get('/data',protect,getUserData)
userRouter.get('/cars',getCars)

export default userRouter;