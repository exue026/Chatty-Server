import express from 'express';

import devices from './devices';
import users from './users';
import relations from './relations';

var router = express.Router();

router.use('/devices', devices);
router.use('/users', users);
router.use('/relations', relations);

export default router;
