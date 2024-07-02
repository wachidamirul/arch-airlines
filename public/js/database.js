const database = {
  menu: [
    { parent: "Home", slug: "./index.html", child: [] },
    { parent: "About Us", slug: "./about-us.html", child: [] },
    { parent: "Services", slug: "./services.html", child: [] },
    {
      parent: "Our Fleet",
      slug: "./our-fleet.html",
      child: [
        {
          name: "Piaggio P-180 Avanti II",
          slug: "./our-fleet/p-180-avanti-ii.html",
        },
        {
          name: "Cessna Grand Caravan",
          slug: "./our-fleet/cessna-grand-caravan.html",
        },
        {
          name: "Pilatus Porter PC-6",
          slug: "./our-fleet/pilatus-porter-pc-6.html",
        },
        {
          name: "LET 410",
          slug: "./our-fleet/let-410.html",
        },
        {
          name: "Air Tractor AT-802",
          slug: "./our-fleet/air-tractor-at-802.html",
        },
        {
          name: "Agusta Koala A119",
          slug: "./our-fleet/agusta-koala-a119.html",
        },
      ],
    },
    { parent: "News", slug: "./news.html", child: [] },
    { parent: "FAQs", slug: "./faqs.html", child: [] },
  ],

  bandara: [
    {
      nama: "Soekarno-Hatta",
      kode: "CGK",
      kota: "Jakarta",
    },
    {
      nama: "Ngurah Rai",
      kode: "DPS",
      kota: "Denpasar",
    },
    {
      nama: "Juanda",
      kode: "SUB",
      kota: "Surabaya",
    },
    {
      nama: "Sultan Hasanuddin",
      kode: "UPG",
      kota: "Makassar",
    },
    {
      nama: "Kualanamu",
      kode: "KNO",
      kota: "Medan",
      provinsi: "Sumatra Utara",
    },
    {
      nama: "Adisutjipto",
      kode: "JOG",
      kota: "Yogyakarta",
    },
    {
      nama: "Sam Ratulangi",
      kode: "MDC",
      kota: "Manado",
    },
    {
      nama: "Sepinggan",
      kode: "BPN",
      kota: "Balikpapan",
    },
    {
      nama: "Minangkabau",
      kode: "PDG",
      kota: "Padang",
    },
    {
      nama: "Sultan Iskandar Muda",
      kode: "BTJ",
      kota: "Banda Aceh",
    },
  ],

  promotion: [
    {
      image: "./images/promo/promo-1.jpg",
      text: "Promo 1",
    },
    {
      image: "./images/promo/promo-2.jpg",
      text: "Promo 2",
    },
    {
      image: "./images/promo/promo-3.jpg",
      text: "Promo 3",
    },
    {
      image: "./images/promo/promo-4.jpg",
      text: "Promo 4",
    },
    {
      image: "./images/promo/promo-5.jpg",
      text: "Promo 5",
    },
  ],

  service: [
    {
      title: "First Class",
      image: "./images/services/service-1.jpg",
    },
    {
      title: "Bussiness Class",
      image: "./images/services/service-2.jpg",
    },
    {
      title: "Premium Class",
      image: "./images/services/service-3.jpg",
    },
    {
      title: "Economy Class",
      image: "./images/services/service-4.jpg",
    },
  ],
};
