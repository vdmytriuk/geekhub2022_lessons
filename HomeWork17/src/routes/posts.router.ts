import {Router} from "express";
import {postsController} from "../controllers";

const router = Router();

router.patch('/:postId', postsController.updatePost);
router.delete('/:postId', postsController.deletePost);

export default router;