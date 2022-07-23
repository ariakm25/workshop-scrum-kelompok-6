const indexController = require('../controllers/index.controller');
const guest = require('../middlewares/guest');
const auth = require('../middlewares/auth');
const authController = require('../controllers/auth.controller');
const dashboardController = require('../controllers/dashboard.controller');

const router = require('express').Router();

router.get('/', indexController.index);
router.get('/login', guest, authController.login);
router.post('/login', guest, authController.doLogin);
router.get('/logout', auth, authController.logout);

router.get('/dashboard', auth, dashboardController.dashboard);

module.exports = router;
