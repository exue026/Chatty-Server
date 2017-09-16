import express from 'express';

import devices from './devices';
import users from './users';
import relations from './relations';
import posts from './posts';

var router = express.Router();

router.use('/devices', devices);
router.use('/users', users);
router.use('/relations', relations);
router.use('/posts', posts);

export default router;
