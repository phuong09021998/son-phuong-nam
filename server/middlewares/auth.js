// const jwt = require('jsonwebtoken');
const User = require('../models/User');

const checkAuth = async (req, res, next) => {
  try {
    let token
    console.log(req.headers.cookie)
    const cookies = req.headers.cookie.split(';');
    // console.log(cookies)
    const filterCookie = cookies.filter((cookie) => cookie.includes('spn_auth'));
    // console.log(filterCookie)
    if (filterCookie.length > 0) {
      token = filterCookie[0].split('=')[1]
      // console.log(token)
    }
    // console.log(token)
    const user = await User.findByToken(token);

    if (!token || !user) {
      throw new Error('User not found.');
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({
      success: false,
      error: 'You are not currently login.',
    });
  }
};

module.exports = checkAuth;
