import {Router} from 'express';
import {signup, login} from '../controllers/auth/auth.controller';
import {verifyUserCreate, verifyUserLogin} from '../middlewares/verifyUserFields'

const router: Router = Router();

router.post('/signup', verifyUserCreate, signup);

router.post('/login', verifyUserLogin, login);

export default router;