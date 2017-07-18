import express from 'express';

import devices from './devices';
import users from './users';

var router = express.Router();

router.use('/devices', devices);
router.use('/users', users);

export default router;
