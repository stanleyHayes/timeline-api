import express from "express";

const router = express.Router({mergeParams: true});
import {register, updateProfile, deleteProfile, getProfile, login, verifyUser, forgotPassword} from "../controllers/authentication.js";

router.post('/register', register);
router.post('/login', login);
router.get('/profile', getProfile);
router.put('/profile', updateProfile);
router.delete('/profile', deleteProfile);
router.post('/:token/verify', verifyUser);
router.post('/me/forgot-password', forgotPassword);

export default router;