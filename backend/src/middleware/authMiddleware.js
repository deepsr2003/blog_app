const jwt = require('jsonwebtoken');
const pool = require('../config/db');

const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Attach user to the request object, but without the password
      const [rows] = await pool.query('SELECT id, username FROM users WHERE id = ?', [decoded.id]);
      if (rows.length > 0) {
        req.user = rows[0];
        next();
      } else {
        res.status(401).json({ message: 'Not authorized, user not found' });
      }
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };
