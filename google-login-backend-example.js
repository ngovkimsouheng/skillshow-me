// Example backend endpoint for Google login
// This is what you need to add to your backend API

// POST /auth/google-login
// Body: { "token": "firebase_id_token_here" }

const express = require('express');
const admin = require('firebase-admin');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Your user model

// Initialize Firebase Admin SDK
const serviceAccount = require('../path/to/your/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const router = express.Router();

router.post('/google-login', async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: 'Firebase token is required' });
    }

    // Verify Firebase token
    const decodedToken = await admin.auth().verifyIdToken(token);
    const { uid, email, name, picture } = decodedToken;

    // Check if user exists
    let user = await User.findOne({ firebaseUid: uid });

    if (!user) {
      // Create new user
      user = new User({
        firebaseUid: uid,
        email: email,
        username: name || email.split('@')[0],
        profile: picture,
        role: email === 'adminskillshow@gmail.com' ? 'admin' : 'user', // Set admin role
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      });
      await user.save();
    }

    // Generate JWT token for your app
    const appToken = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    // Return user data and token
    res.json({
      token: appToken,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        profile: user.profile,
        role: user.role,
        is_active: user.is_active,
        created_at: user.created_at
      }
    });

  } catch (error) {
    console.error('Google login error:', error);
    res.status(401).json({ error: 'Invalid Firebase token' });
  }
});

module.exports = router;