module.exports = {
  index: async (req, res) => {
    return res.render('index');
  },
  places: async (req, res) => {
    return res.render('places');
  },
  photos: async (req, res) => {
    var data = [
      {
        img: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        title: "Ubud, Tegelalang, Bali"
      },
      {
        img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80",
        title: "Bali Wonderful"
      },
      {
        img: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        title: "Bali Amazing"
      },            
      {
        img: "https://images.unsplash.com/photo-1558005530-a7958896ec60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        title: "Bali Beautiful"
      },                
      {
        img: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        title: "Relaxing in Bali"
      },
      {
        img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFsaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        title: "Temple Bali"
      },          
      {
        img: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        title: "Nusa Penida"
      },
      {
        img: "https://img.okezone.com/content/2021/11/17/406/2502956/bali-perketat-94-objek-wisata-jelang-libur-nataru-masa-karantina-diusulkan-1-hari-fxwkThe4gl.JPG",
        title: "Desa Panglipuran"
      },       
      {
        img: "https://a.cdn-hotels.com/gdcs/production143/d1749/87f730af-b068-4744-9a6e-65dbf37a4a38.jpg",
        title: "Garuda Wisnu Kencana"
      },             
      {
        img: "https://www.ngopibareng.id/images/uploads/2022/2022-01-14/tari-kecak-merajut-asa-menuai-mimpi-pulihkan-wisata-di-bali--thumbnail-252",
        title: "Tari Kecak"
      },
      {
        img: "https://i0.wp.com/www.margaapsari.com/app/uploads/2019/11/Wisata-Karangasem-Bali-Tirta-Gangga-02.jpg?fit=1024%2C768&amp;ssl=1",
        title: "Taman Tirta Gangga"
      },       
      {
        img: "https://www.flokq.com/blog/wp-content/uploads/2021/01/10mb-min-800x600.png",
        title: "Area Museum Bali"
      },                                
    ]

    return res.render('photos', {data});
  },  
};
