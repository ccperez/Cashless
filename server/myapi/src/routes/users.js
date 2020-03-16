import express from 'express';
import user from '../controllers/users';
import user_forgotpassword from '../controllers/users_forgotpassword';
import user_update from '../controllers/users_update';

const router = express.Router();

// user
router.post('/signup', (req, res) => {
  user.signUp(req, res);
});

router.post('/signup/confirmed', (req, res) => {
  user.confirmed(req, res);
});

router.post('/signin', (req, res) => {
  user.signIn(req, res);
});

// user_forgotpassword
router.post('/reset_password_request', (req, res) => {
  user_forgotpassword.requestResetPassword(req, res);
});

router.post('/reset_password_request/confirmed', (req, res) => {
  user_forgotpassword.confirmedRequestResetPassword(req, res);
});

router.post('/reset_password', (req, res) => {
  user_forgotpassword.resetPassword(req, res);
});

// user_update
router.post('/update_fullname', (req, res) => {
  user_update.updateFullname(req, res);
});

router.post('/update_password', (req, res) => {
  user_update.updatePassword(req, res);
});

router.post('/update_pin', (req, res) => {
  user_update.updatePin(req, res);
});

export default router;