const indexController = require('../controllers/index.controller');
const guest = require('../middlewares/guest');
const auth = require('../middlewares/auth');
const check = require('../middlewares/check');
const authController = require('../controllers/auth.controller');
const dashboardController = require('../controllers/dashboard.controller');
const aboutController = require('../controllers/about.controller');
const kulturController = require('../controllers/kultur.controller');
const { about } = require('../controllers/about.controller');

const router = require('express').Router();

router.get('/', check, indexController.index);
router.get('/places', check, indexController.places);
router.get('/photos', indexController.photos);

router.get('/login', guest, authController.login);
router.post('/login', guest, authController.doLogin);
router.get('/logout', auth, authController.logout);

router.get('/register', guest, authController.register);
router.post('/doRegister', guest, authController.doRegister);

router.get('/dashboard', auth, dashboardController.dashboard);
router.get('/about', guest, aboutController.about);
router.get('/culture', guest, kulturController.kultur);

router.get('/rumah_adat', check, indexController.rumahAdat);

module.exports = router;
