const { hashSync } = require('bcryptjs');
const User = require('./models/User');

User.findOne({
  where: {
    username: 'admin',
  },
})
  .then((user) => {
    if (!user) {
      let password = hashSync('admin', 10);
      User.create({
        nama_lengkap: 'admin',
        jenis_kelamin: 'Pria',
        username: 'admin',
        password,
      });
    }
  })
  .catch((err) => {
    console.log(err);
  });

