const { DataTypes } = require('sequelize');
const db = require('../database');

const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama_lengkap: DataTypes.STRING(80),
  jenis_kelamin: DataTypes.ENUM('Pria', 'Wanita'),
  username: {
    type: DataTypes.STRING(255),
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
  },
});

module.exports = User;
