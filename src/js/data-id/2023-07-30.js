dataSetVersion = "2023-06-30"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by branch",
    key: "branch",
    tooltip: "Centang ini untuk mengecualikan member dari cabang tersebut.",
    checked: false,
    sub: [
      { name: "hololive", key: "jp" },
      { name: "hololive Staff", key: "staff" },
      { name: "hololive China", key: "cn" },
      { name: "hololive Indonesia", key: "id" },
      { name: "hololive English", key: "en" },
      { name: "holostars", key: "st" },
      { name: "holostars English", key: "sten" },
    ]
  },
  {
    name: "Kecualikan holostars",
    key: "boy",
    tooltip: "Centang untuk mengecualikan holostars.",
    checked: false
  },
  {
    name: "Kecualikan hololive",
    key: "girl",
    tooltip: "Centang untuk mengecualikan hololive.",
    checked: false
  },
  {
    name: "Kecualikan mantan anggota",
    key: "retired",
    tooltip: "Centang ini untuk mengecualikan anggota yang lulus/diberhentikan.",
    checked: true
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Tokino Sora",
    img: "sora.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Robocosan",
    img: "robo.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "AZKi",
    img: "azki.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Sakura Miko",
    img: "miko.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Hoshimachi Suisei",
    img: "suisei.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Yozora Mel",
    img: "mel.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Aki Rosenthal",
    img: "aki.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Akai Haato",
    img: "haato.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Shirakami Fubuki",
    img: "fubuki.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Hitomi Chris",
    img: "chris.jpeg",
    opts: {
      branch: ["jp"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Natsuiro Matsuri",
    img: "matsuri.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Minato Aqua",
    img: "aqua.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Murasaki Shion",
    img: "shion.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Nakiri Ayame",
    img: "ayame.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Yuzuki Choco",
    img: "choco.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Oozora Subaru",
    img: "subaru.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Ookami Mio",
    img: "mio.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Nekomata Okayu",
    img: "okayu.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Inugami Korone",
    img: "korone.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Usada Pekora",
    img: "pekora.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Uruha Rushia",
    img: "rushia.jpeg",
    opts: {
      branch: ["jp"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Shiranui Flare",
    img: "flare.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Shirogane Noel",
    img: "noel.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Houshou Marine",
    img: "marine.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Amane Kanata",
    img: "kanata.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Tsunomaki Watame",
    img: "watame.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Tokoyami Towa",
    img: "towa.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Himemori Luna",
    img: "luna.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Kiryu Coco",
    img: "coco.jpeg",
    opts: {
      branch: ["jp"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Yukihana Lamy",
    img: "lamy.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Momosuzu Nene",
    img: "nene.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Shishiro Botan",
    img: "botan.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Omaru Polka",
    img: "polka.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Mano Aloe",
    img: "aloe.jpeg",
    opts: {
      branch: ["jp"],
      girl: true,
      retired: true
    }
  },
  {
    name: "La+ Darkness",
    img: "laplus.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Takane Lui",
    img: "lui.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Hakui Koyori",
    img: "koyori.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Sakamata Chloe",
    img: "chloe.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Kazama Iroha",
    img: "iroha.jpeg",
    opts: {
      branch: ["jp"],
      girl: true
    }
  },
  {
    name: "Friend A (A-chan)",
    img: "achan.jpeg",
    opts: {
      branch: ["staff"],
      girl: true
    }
  },
  {
    name: "Harusaki Nodoka",
    img: "nodoka.jpeg",
    opts: {
      branch: ["staff"],
      girl: true
    }
  },
  {
    name: "Ayunda Risu",
    img: "risu.jpeg",
    opts: {
      branch: ["id"],
      girl: true
    }
  },
  {
    name: "Moona Hoshinova",
    img: "moona.jpeg",
    opts: {
      branch: ["id"],
      girl: true
    }
  },
  {
    name: "Airani Iofifteen",
    img: "iofi.jpeg",
    opts: {
      branch: ["id"],
      girl: true
    }
  },
  {
    name: "Kureiji Ollie",
    img: "ollie.jpeg",
    opts: {
      branch: ["id"],
      girl: true
    }
  },
  {
    name: "Anya Melfissa",
    img: "anya.jpeg",
    opts: {
      branch: ["id"],
      girl: true
    }
  },
  {
    name: "Pavolia Reine",
    img: "reine.jpeg",
    opts: {
      branch: ["id"],
      girl: true
    }
  },
  {
    name: "Vestia Zeta",
    img: "zeta.jpeg",
    opts: {
      branch: ["id"],
      girl: true
    }
  },
  {
    name: "Kaela Kovalaskia",
    img: "kaela.jpeg",
    opts: {
      branch: ["id"],
      girl: true
    }
  },
  {
    name: "Kobo Kanaeru",
    img: "kobo.jpeg",
    opts: {
      branch: ["id"],
      girl: true
    }
  },
  {
    name: "Mori Calliope",
    img: "calli.jpeg",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Takanashi Kiara",
    img: "kiara.jpeg",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Ninomae Ina'nis",
    img: "ina.jpeg",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Gawr Gura",
    img: "gura.jpeg",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Watson Amelia",
    img: "ame.jpeg",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "IRyS",
    img: "irys.jpeg",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Ceres Fauna",
    img: "fauna.jpeg",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Ouro Kronii",
    img: "kronii.jpeg",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Tsukumo Sana",
    img: "sana.jpeg",
    opts: {
      branch: ["en"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Nanashi Mumei",
    img: "mumei.jpeg",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Hakos Baelz",
    img: "bae.jpeg",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Shiori Novella",
    img: "shiori.jpeg",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Koseki Bijou",
    img: "koseki.jpeg",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Nerrisa Ravencroft",
    img: "nerrisa.jpeg",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Fuwawa Abyssgard",
    img: "fuwawa.jpeg",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Mococo Abyssgard",
    img: "mococo.jpeg",
    opts: {
      branch: ["en"],
      girl: true
    }
  },
  {
    name: "Yogiri",
    img: "yogiri.jpeg",
    opts: {
      branch: ["cn"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Civia",
    img: "civia.jpeg",
    opts: {
      branch: ["cn"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Spade Echo",
    img: "echo.jpeg",
    opts: {
      branch: ["cn"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Doris",
    img: "doris.jpeg",
    opts: {
      branch: ["cn"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Rosalyn",
    img: "rosalyn.jpeg",
    opts: {
      branch: ["cn"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Artia",
    img: "artia.jpeg",
    opts: {
      branch: ["cn"],
      girl: true,
      retired: true
    }
  },
  {
    name: "Hanasaki Miyabi",
    img: "miyabi.jpeg",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Kanade Izuru",
    img: "izuru.jpeg",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Arurandeisu",
    img: "aruran.jpeg",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Rikka",
    img: "rikka.jpeg",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Kagami Kira",
    img: "kira.jpeg",
    opts: {
      branch: ["st"],
      boy: true,
      retired: true
    }
  },
  {
    name: "Yakushiji Suzaku",
    img: "suzaku.jpeg",
    opts: {
      branch: ["st"],
      boy: true,
      retired: true
    }
  },
  {
    name: "Astel Leda",
    img: "astel.jpeg",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Kishido Temma",
    img: "temma.jpeg",
    opts: {
      branch: ["st"],
      girl: true
    }
  },
  {
    name: "Yukoku Roberu",
    img: "roberu.jpeg",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Kageyama Shien",
    img: "shien.jpeg",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Aragami Oga",
    img: "oga.jpeg",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Tsukishita Kaoru",
    img: "kaoru.jpeg",
    opts: {
      branch: ["st"],
      boy: true,
      retired: true
    }
  },
  {
    name: "Yatogami Fuma",
    img: "fuma.jpeg",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Utsugi Uyu",
    img: "uyu.jpeg",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Hizaki Gamma",
    img: "gamma.jpeg",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Minase Rio",
    img: "rio.jpeg",
    opts: {
      branch: ["st"],
      boy: true
    }
  },
  {
    name: "Regis Altare",
    img: "regis.jpeg",
    opts: {
      branch: ["sten"],
      boy: true
    }
  },
  {
    name: "Magni Dezmond",
    img: "magni.jpeg",
    opts: {
      branch: ["sten"],
      boy: true
    }
  },
  {
    name: "Axel Syrios",
    img: "axel.jpeg",
    opts: {
      branch: ["sten"],
      boy: true
    }
  },
  {
    name: "Noir Vesper",
    img: "noir.jpeg",
    opts: {
      branch: ["sten"],
      boy: true
    }
  },
  {
    name: "Gavis Bettel",
    img: "gavis.jpeg",
    opts: {
      branch: ["sten"],
      boy: true
    }
  },
  {
    name: "Machina X Flayon",
    img: "machina.jpeg",
    opts: {
      branch: ["sten"],
      boy: true
    }
  },
  {
    name: "Banzoin Hakka",
    img: "hakka.jpeg",
    opts: {
      branch: ["sten"],
      boy: true
    }
  },
  {
    name: "Josuiji Shinri",
    img: "shinri.jpeg",
    opts: {
      branch: ["sten"],
      boy: true
    }
  }
]
