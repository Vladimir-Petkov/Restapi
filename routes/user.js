const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/', controllers.user.get.userById);

router.post('/register', controllers.user.post.register);

router.post('/login', controllers.user.post.login);

router.get('/reset', controllers.user.get.resetPassword);

router.post('/reset/:token', controllers.user.post.resetPassword);

router.post('/logout', controllers.user.post.logout);

router.get('/:id', controllers.user.get.userById);

module.exports = router;