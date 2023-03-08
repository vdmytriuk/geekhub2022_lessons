import {Router} from "express";
import {postsController, userController} from "../controllers";

const router = Router();

router.use('/users', userController.router);
router.use('/posts', postsController.router);

export default router;