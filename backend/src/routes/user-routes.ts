import { Router } from 'express';
import { getAllUsers, userLogin, userSignup } from '../controllers/user-controllers.js';
import { loginValidation, signupValidation, validate } from '../utils/validators.js';

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidation), userSignup);
userRoutes.post("/login", validate(loginValidation), userLogin);
export default userRoutes;

