const database = {
  menu: [
    { parent: "Home", slug: "./index.html", child: [] },
    { parent: "About Us", slug: "./about-us.html", child: [] },
    { parent: "Services", slug: "./services.html", child: [] },
    {
      parent: "Fleets",
      slug: "./fleet.html",
      child: [
        // {
        //   name: "Piaggio P-180 Avanti II",
        //   slug: "./our-fleet/p-180-avanti-ii.html",
        // },
        // {
        //   name: "Cessna Grand Caravan",
        //   slug: "./our-fleet/cessna-grand-caravan.html",
        // },
        // {
        //   name: "Pilatus Porter PC-6",
        //   slug: "./our-fleet/pilatus-porter-pc-6.html",
        // },
        // {
        //   name: "LET 410",
        //   slug: "./our-fleet/let-410.html",
        // },
        // {
        //   name: "Air Tractor AT-802",
        //   slug: "./our-fleet/air-tractor-at-802.html",
        // },
        // {
        //   name: "Agusta Koala A119",
        //   slug: "./our-fleet/agusta-koala-a119.html",
        // },
      ],
    },
    { parent: "News", slug: "./news.html", child: [] },
    { parent: "Contact Us", slug: "./contact-us.html", child: [] },
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
      image: "promo-1.jpg",
      text: "Promo 1",
    },
    {
      image: "promo-2.jpg",
      text: "Promo 2",
    },
    {
      image: "promo-3.jpg",
      text: "Promo 3",
    },
    {
      image: "promo-4.jpg",
      text: "Promo 4",
    },
    {
      image: "promo-5.jpg",
      text: "Promo 5",
    },
  ],

  service: [
    {
      title: "First Class",
      thumbnail: "thumbnail-1.jpg",
      image: "service-1.jpg",
      description:
        "Make the journey your own in First Class. Slide the doors closed on your Private Suite, adjust the mood lighting, and enjoy dining and entertainment on your terms.",
    },
    {
      title: "Bussiness Class",
      thumbnail: "thumbnail-2.jpg",
      image: "service-2.jpg",
      description:
        "Fly Business Class and arrive inspired. Stretch out in lie-flat comfort, dine on international cuisine, and take a stroll to the A380 Onboard Lounge.",
    },
    {
      title: "Premium Class",
      thumbnail: "thumbnail-3.jpg",
      image: "service-3.jpg",
      description:
        "Give yourself a higher level of comfort and relaxation in our new Premium Economy cabin. Recline your cream leather seat, extend the leg rests, and relax into a more luxurious journey.",
    },
    {
      title: "Economy Class",
      thumbnail: "thumbnail-4.jpg",
      image: "service-4.jpg",
      description:
        "Experience an Economy Class that feels like an upgrade. Sit back in comfort, enjoy delicious multicourse meals, and lose yourself in thousands of movies, TV shows and more.",
    },
  ],

  news: [
    {
      date: "26 July 2024",
      image: "news-1.jpg",
      title: `Arch Airline Once Again Achieved The Title Of "The World's Best Cabin Crew" Skytrax In 2023`,
    },
    {
      date: "10 July 2024",
      image: "news-2.jpg",
      title: `Arch Airline in-flight meals pre-ordering service now available across all German gateways`,
    },
    {
      date: "1 July 2024",
      image: "news-3.png",
      title: `Arch Airline unveils first destinations to be served with refurbished Boeing 777`,
    },
    {
      date: "25 June 2024",
      image: "news-4.jpg",
      title: `Arch Airline triumphs with 7 award wins at the Skytrax World Airline Awards 2024`,
    },
    {
      date: "12 June 2024",
      image: "news-5.jpg",
      title: `Arch Airline celebrates one year of Premium Economy in Singapore`,
    },
    {
      date: "07 June 2024",
      image: "news-6.jpg",
      title: `Arch Airline highlights the importance of punctuality at the airport for travel this summer`,
    },
    {
      date: "04 June 2024",
      image: "news-7.jpg",
      title: `Arch Airline to fly to Madagascar via the Seychelles`,
    },
    {
      date: "02 June 2024",
      image: "news-8.jpeg",
      title: `Arch Airline scores 3 top awards for Inflight Entertainment, Connectivity, and Premium Economy Class`,
    },
  ],

  about: [
    {
      title: "Company Profile",
      description:
        "Indonesia's commercial aviation history began when Indonesian people was in struggle to defend their independence.",
      article: `<p>Presenting a new level of service excellence in air travel, Arch Airlanes, the national flag carrier of Indonesia, seamlessly connects more than 90 destinations worldwide to not only one of the largest economies in Southeast Asia, but also an array of exotic destinations in the beautiful archipelago of Indonesia all at once. With more than 600 daily flights, Arch Airlanes proudly serves its passengers with the award-winning "Arch Airlanes Experience" service, which highlights the warm Indonesian Hospitality and rich diverse culture.</p><p>Arch Airlanes group currently operates 202 aircraft with an average age less than five years. This amount is accommodated by Arch Airlanes as a main brand with a total of 144 aircraft, and Citilink as a Low Cost Carrier Airline which operates 58 fleet aircraft.</p><p>The airline continuously strives through its ongoing transformation program to provide better and even more convenient services. The achievement of Arch Airlanes's transformation program can be seen from global recognition a Skytrax's 5-star airline rating since 2014, ranked as Top 10 Worlds Best airline in the world, as well as winning the prestigious “The World's Best Cabin Crew” award fpr five consecutive years from 2014.</p><p>To complement the Skytrax Awards, Arch Airlanes also awarded the "5-Stars Airline" recognition from the Airline Passenger Experience Association (APEX), a non-profit association for enhanced passenger flight experience based in New York, USA.</p>`,
    },
    {
      title: "Company Vision & Mission",
      description:
        "Providing the highest value to customers through excellent Indonesian hospitality.",
      article: `<p class="text-xl font-bold">Company Vision</p><p class="italic">"TO BECOME A SUSTAINABLE AVIATION GROUP BY CONNECTING INDONESIA AND BEYOND WHILE DELIVERING INDONESIAN HOSPITALITY"</p><p class="text-xl font-bold">Company Mission</p><p class="italic">"STRENGTHENING BUSINESS FUNDAMENTAL THROUGH STRONG REVENUE GROWTH, COST LEADERSHIP IMPLEMENTATION, ORGANIZATION EFFECTIVENESS AND GROUP SYNERGY REINFORCEMENT WHILE FOCUSING ON HIGH STANDARD OF SAFETY AND CUSTOMER-ORIENTED SERVICES DELIVERED BY PROFESSIONAL & PASSIONATE EMPLOYEES"</p>`,
    },
  ],

  fleets: [
    {
      title: "Pilatus Porter",
      image: "fleet-1.jpg",
    },
    {
      title: "Cessna Grand Caravan",
      image: "fleet-2.jpg",
    },
    {
      title: "Piaggio P-180 Avanti II",
      image: "fleet-3.jpg",
    },
    {
      title: "Air Tractor AT-802",
      image: "fleet-4.jpg",
    },
    {
      title: "LET 410",
      image: "fleet-5.jpg",
    },
  ],
};
