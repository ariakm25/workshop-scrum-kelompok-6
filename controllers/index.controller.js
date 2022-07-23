module.exports = {
  index: async (req, res) => {
    return res.render('index');
  },
  places: async (req, res) => {
    return res.render('places');
  },
  photos: async (req, res) => {
    return res.render('photos');
  },  
  rumahAdat: async (req, res) => {
    return res.render('rumah_adat');
  },  
};
