import {Router} from "express";
import userRouter from "./user.router";
import postsRouter from "./posts.router";

const router = Router();

router.use('/users', userRouter);
router.use('/posts', postsRouter);

export default router;