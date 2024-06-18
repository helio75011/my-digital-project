const express = require('express');
const { registerUser, verifyCode, loginUser, resendCode, getUserInfo } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/verify', verifyCode);
router.post('/login', loginUser);
router.post('/resend-code', resendCode);
router.post('/get-user-info', getUserInfo);

module.exports = router;
