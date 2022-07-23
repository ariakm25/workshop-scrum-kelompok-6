const { compareSync } = require('bcryptjs');
const User = require('../models/User');

module.exports = {
  login: async (req, res) => {
    return res.render('login');
  },

  doLogin: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.render('login', {
        error: 'Email tidak ditemukan',
      });
    }

    const isMatch = compareSync(password, user.password);

    if (!isMatch) {
      return res.render('login', {
        error: 'Password salah',
      });
    }

    req.session.user = {
      id: user.id,
      email: user.email,
      nama: user.nama,
    };

    return res.redirect('/dashboard');
  },

  logout: async (req, res) => {
    req.session.destroy();
    return res.redirect('/');
  },
};
