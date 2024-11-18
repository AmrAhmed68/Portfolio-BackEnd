const express = require('express');
const crypto = require('crypto');
const Admin = require('../models/admin');
const router = express.Router();

const generateToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

router.get('/generate-token', async (req, res) => {
  const token = generateToken();

  try {
    await Admin.create({ authToken: token });
    res.status(201).json({ authToken: token });
  } catch (error) {
    res.status(500).json({ error: 'Error generating token' });
  }
});

router.get('/dashboard', async (req, res) => {
  const { authToken } = req.query;

  if (!authToken) {
    return res.status(400).json({ error: 'No token provided' });
  }

  try {
    const admin = await Admin.findOne({ authToken });

    if (admin) {
      res.status(200).json({ message: 'Access granted to admin dashboard' });
    } else {
      res.status(403).json({ error: 'Invalid or expired token' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
