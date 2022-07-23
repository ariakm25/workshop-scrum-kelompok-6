module.exports = {
  index: async (req, res) => {
    return res.render('index');
  },
  places: async (req, res) => {
    return res.render('places');
  },
};
