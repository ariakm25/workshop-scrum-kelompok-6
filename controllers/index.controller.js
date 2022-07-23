module.exports = {
  index: async (req, res) => {
    return res.render('index');
  },
  place: async (req, res) => {
    return res.render('place');
  },
};
