const express = require('express');
const { registerUser, verifyCode, loginUser, resendCode } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/verify', verifyCode);
router.post('/login', loginUser);
router.post('/resend-code', resendCode);

module.exports = router;
