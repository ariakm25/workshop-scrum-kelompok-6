const { compareSync } = require('bcryptjs');
const User = require('../models/User');

module.exports = {
  login: async (req, res) => {
    return res.render('login');
  },

  doLogin: async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({
      where: {
        username,
      },
    });

    if (!user) {
      return res.render('login', {
        error: 'Username tidak ditemukan',
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
      nama_lengkap: user.nama_lengkap,
      jenis_kelamin: user.jenis_kelamin,
      username: user.username
    };

    return res.redirect('/dashboard');
  },

  logout: async (req, res) => {
    req.session.destroy();
    return res.redirect('/');
  },

  register: async (req, res) => {
    return res.render('register');
  },
  
  doRegister: async (req, res) => {
    const { nama_lengkap, jenis_kelamin, username, password } = req.body;

    const user = await User.findOne({
      where: {
        username,
      },
    });

    if (user) {
      return res.render('register', {
        error: 'Username sudah digunakan, silahkan pilih username lain.',
      });
    }

    const newUser = await User.create({
      nama_lengkap: nama_lengkap,
      jenis_kelamin: jenis_kelamin,
      username: username,
      password: password
    });

    req.session.user = {
      id: newUser.id,
      nama_lengkap: newUser.nama_lengkap,
      jenis_kelamin: newUser.jenis_kelamin,
      username: newUser.username
    };

    return res.redirect('/dashboard');
  },
};
