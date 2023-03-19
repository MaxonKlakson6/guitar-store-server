const colors = [
  "бежевый",
  "белый",
  "чёрный",
  "красный",
  "оранжевый",
  "голубой",
];

const materials = [
  "агатис",
  "вяз",
  "кедр",
  "клён",
  "нато",
  "махагони",
  "ольха",
  "сосна",
  "тополь",
];

const guitars = [
  {
    id: 101,
    category: "джаз бас",
    name: "Бас Sterling by MusicMan StingRay RAY4 Vintage Cream",
    price: 1781.3,
    material: "Агатис",
    stringQuantity: 4,
    color: "Бежевый",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F101.png?alt=media&token=0029e506-fd23-4f00-849e-700f236a28ac",
  },
  {
    id: 102,
    category: "джаз бас",
    name: "Бас Cort Action PJ OPB",
    price: 621.6,
    material: "Клён",
    stringQuantity: 4,
    color: "Черный",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F102.png?alt=media&token=2c19f456-dc12-4982-8085-f7a942f6d827",
  },
  {
    id: 103,
    category: "джаз бас",
    name: "Бас Clevan CB-10 BK",
    price: 690.0,
    material: "Сосна",
    stringQuantity: 4,
    color: "Черный",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F103.png?alt=media&token=f1cb4dd3-25c0-4a04-bf63-2973a19fe9ee",
  },
  {
    id: 104,
    category: "джаз бас",
    name: "Бас-гитара Ibanez EHB1000S-SFM Sea Foam Green Matte",
    price: 2232.6,
    material: "Махагони",
    stringQuantity: 4,
    color: "Голубой",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F104.png?alt=media&token=ea646d5a-7790-408c-a2b9-3c0fa5ae05fc",
  },
  {
    id: 105,
    category: "джаз бас",
    name: "Бас Cort GB34JJ 3TS",
    price: 819.9,
    material: "Кедр",
    stringQuantity: 4,
    color: "Оранжевый",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F105.png?alt=media&token=d3872a92-18ca-4c5b-8c02-ae80c1dd90e1",
  },
  {
    id: 106,
    category: "джаз бас",
    name: "Бас Clevan CPB-52F BCH",
    price: 1028.87,
    material: "Тополь",
    stringQuantity: 4,
    color: "Красный",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F106.png?alt=media&token=8bdab0cf-25dd-4b34-b555-9c44c2e1aca1",
  },
  {
    id: 107,
    category: "джаз бас",
    name: "Бас Sterling Production by Renata Filippova",
    price: 918.9,
    material: "Агатис",
    stringQuantity: 4,
    color: "Голубой",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F107.png?alt=media&token=88c38b14-6cf0-4c83-b687-fe6ca53a5abf",
  },
  {
    id: 108,
    category: "джаз бас",
    name: "Бас Clevan CJB-20 SB",
    price: 1282.0,
    material: "Ольха",
    stringQuantity: 4,
    color: "Голубой",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F108.png?alt=media&token=0d95591f-ead5-4843-b751-df176013c256",
  },
  {
    id: 109,
    category: "джаз бас",
    name: "Бас Ibanez EHB1005-BKF Black Flat",
    price: 729.2,
    material: "Вяз",
    stringQuantity: 5,
    color: "Белый",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F109.png?alt=media&token=ac1457c6-e5b6-4d93-875b-a6fd39e635a4",
  },
  {
    id: 111,
    category: "джаз бас",
    name: "Бас Cort GB54JJ-SPG GB Series",
    price: 1789.0,
    material: "Нато",
    stringQuantity: 4,
    color: "Голубой",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F111.jpg?alt=media&token=9bd94795-e9a3-4662-855a-67273d7ace9d",
  },
  {
    id: 112,
    category: "джаз бас",
    name: "Бас Dunlop 433R1.40 Ultex Sharp",
    price: 3000.0,
    material: "Вяз",
    stringQuantity: 6,
    color: "Белый",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F112.png?alt=media&token=1ae77d97-aa04-47f1-b7d0-4e1199b31776",
  },
  {
    id: 201,
    category: "пресижн бас",
    name: "Бас Fender American Performer Precision Bass MN Satin Lake Placid Blue",
    price: 5983.12,
    material: "Вяз",
    stringQuantity: 4,
    color: "Голубой",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F201.png?alt=media&token=6c6fe022-f8b8-474a-9fde-5385601924b6",
  },
  {
    id: 202,
    category: "пресижн бас",
    name: "Бас Fender American Performer Precision Bass RW Arctic White",
    price: 7122.82,
    material: "Ольха",
    stringQuantity: 4,
    color: "Белый",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F202.png?alt=media&token=ff04d0a1-5f27-4fb0-8b4e-001c3d73a110",
  },
  {
    id: 203,
    category: "пресижн бас",
    name: "Бас Fender Deluxe Active Precision Bass Special MN 3-Color Sunburst",
    price: 4541.12,
    material: "Ольха",
    stringQuantity: 4,
    color: "Оранжевый",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F203.png?alt=media&token=bed75841-c79c-4ac7-a80a-2e79e21f8f7b",
  },
  {
    id: 204,
    category: "пресижн бас",
    name: "Бас Fender Squier Classic Vibe '60s Precision Bass LRL 3-Color Sunburst",
    price: 3232.11,
    material: "Тополь",
    stringQuantity: 4,
    color: "Оранжевый",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F204.png?alt=media&token=d159d934-95f2-4b55-a7aa-63e830e64020",
  },
  {
    id: 205,
    category: "пресижн бас",
    name: "Бас Fender Squier Classic Vibe '60s Precision Bass LRL Olympic White",
    price: 2080.22,
    material: "Ольха",
    stringQuantity: 4,
    color: "Белый",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F205.png?alt=media&token=54a70d54-f0f1-4ed6-b621-83a0baf28bf8",
  },
  {
    id: 206,
    category: "пресижн бас",
    name: "Бас Fender Vintera '50s Precision Bass MN Dakota Red",
    price: 4618.23,
    material: "Кедр",
    stringQuantity: 4,
    color: "Красный",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F206.png?alt=media&token=ffbed43f-28e4-458b-a808-1a64d869f32d",
  },
  {
    id: 207,
    category: "пресижн бас",
    name: "Бас Fender Squier Contemporary Jazz Bass LRL Ocean Blue Metallic",
    price: 2132.9,
    material: "Махагони",
    stringQuantity: 4,
    color: "Голубой",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F207.png?alt=media&token=70a7c716-b236-4971-981f-d54ce133ffc0",
  },
  {
    id: 208,
    category: "пресижн бас",
    name: "Бас Yamaha TRBX305 BL",
    price: 6132.9,
    material: "Ольха",
    stringQuantity: 5,
    color: "Черный",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F208.jpeg?alt=media&token=4d521640-1e0a-4d5e-8efe-e9a41fed3109",
  },
  {
    id: 209,
    category: "пресижн бас",
    name: "Бас Warwick Corvette ASH 6 NB TS",
    price: 8900.79,
    material: "Сосна",
    stringQuantity: 6,
    color: "Черный",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F209.png?alt=media&token=8749759b-edde-4ecc-ad9b-26d41bb1949d",
  },
  {
    id: 210,
    category: "пресижн бас",
    name: "Бас Canto PBS",
    price: 420.0,
    material: "Агатис",
    stringQuantity: 4,
    color: "Белый",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F210.png?alt=media&token=83ac5970-b118-404e-9b71-3c869371879d",
  },
  {
    id: 301,
    category: "безлодовый бас",
    name: "Бас Cort B4FL-Plus-AS-OPN",
    price: 1022.9,
    material: "Агатис",
    stringQuantity: 4,
    color: "Бежевый",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F301.png?alt=media&token=0685e797-6a66-4623-ab4b-0c0765cdad79",
  },
  {
    id: 302,
    category: "безлодовый бас",
    name: "Бас STAGG BC300FL-BK",
    price: 540.23,
    material: "Нато",
    stringQuantity: 4,
    color: "Черный",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F302.png?alt=media&token=bffa2cfa-5d24-4447-8951-fb4291150092",
  },
  {
    id: 303,
    category: "безлодовый бас",
    name: "Бас IBANEZ SRF705-BBF BROWN BURST FLAT",
    price: 673.0,
    material: "Махагони",
    stringQuantity: 5,
    color: "Оранжевый",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F303.png?alt=media&token=fdc23673-0a8f-418d-aae5-ef8442507040",
  },
  {
    id: 304,
    category: "безлодовый бас",
    name: "Бас Dean Edge Select 4-String Burled Poplar",
    price: 928.9,
    material: "Сосна",
    stringQuantity: 4,
    color: "Оранжевый",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F304.jpg?alt=media&token=8a784071-5e93-48e9-9df3-7655312532be",
  },
  {
    id: 305,
    category: "безлодовый бас",
    name: "Бас Ibanez SD-GR",
    price: 1290.8,
    material: "Тополь",
    stringQuantity: 4,
    color: "Оранжевый",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F305.png?alt=media&token=572126f1-947f-49c9-9245-123771d8aa40",
  },
  {
    id: 401,
    category: "полуакустический бас",
    name: "Бас IBANEZ AFB200-TKS",
    price: 2438.21,
    material: "Кедр",
    stringQuantity: 4,
    color: "Черный",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F401.png?alt=media&token=190b1fa9-a579-498c-a494-c69de5d9b567",
  },
  {
    id: 402,
    category: "полуакустический бас",
    name: "Бас Aria TAB-CLASSIC BK",
    price: 1982.0,
    material: "Клён",
    stringQuantity: 4,
    color: "Черный",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F402.png?alt=media&token=0e84feb4-3002-4212-8208-5405b09a4258",
  },
  {
    id: 403,
    category: "полуакустический бас",
    name: "Бас Homage HEB700BK",
    price: 1700.0,
    material: "Ольха",
    stringQuantity: 6,
    color: "Красный",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F403.png?alt=media&token=cacabca7-ae6f-4b11-aa0a-8af6eb7b77e7",
  },
  {
    id: 404,
    category: "полуакустический бас",
    name: "Бас ESP FOREST-B LH",
    price: 1334.2,
    material: "Нато",
    stringQuantity: 6,
    color: "Оранжевый",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F404.png?alt=media&token=5d47dea4-6a33-404f-b16b-df48ef016c5b",
  },
  {
    id: 405,
    category: "полуакустический бас",
    name: "Бас Ibanez SRH500F-NNF Aeirum",
    price: 980.0,
    material: "Тополь",
    stringQuantity: 4,
    color: "Оранжевый",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F405.png?alt=media&token=3ab3438c-9bec-4e0e-80a2-fc36dcf8c395",
  },
  {
    id: 406,
    category: "полуакустический бас",
    name: "Бас IBANEZ AGB200-VLS",
    price: 1624.22,
    material: "Агатис",
    stringQuantity: 4,
    color: "Оранжевый",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F406.png?alt=media&token=3a0b24ce-3ed8-4b4c-bdb2-19f2e92c130a",
  },
];

const accessories = [
  {
    id: 501,
    name: "Комбоусилитель Belcat G5",
    price: 127.3,
    description:
      "Имеет мощность в 3 Ватта и оснащен 3-дюймовым динамиком. Здесь есть чистый и перегруженный каналы звучания, а также ряд полезных функций и регулировок.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F501.png?alt=media&token=491ae834-bb1f-4ecb-84a7-edde05ff64aa",
  },
  {
    id: 502,
    name: "Комбоусилитель для бас-гитары Blackstar FLY 3 Bass",
    price: 386.16,
    description:
      "Здесь есть чистый и перегруженный каналы звучания, а также ряд полезных функций и регулировок.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F502.png?alt=media&token=56935fad-535a-47dc-916f-038317f245e4",
  },
  {
    id: 503,
    name: "Комбоусилитель Fender Rumble 15 V3",
    price: 595.3,
    description:
      "Имеет мощность в 10 Ватт и оснащен двумя 5-дюймовыми динамиками Vox Bulldog.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F503.png?alt=media&token=4005ca82-5756-41c7-afc0-4821063d8bee",
  },
  {
    id: 504,
    name: "Комбоусилитель Belcat 15B",
    price: 227.77,
    description:
      "Звучание комбика можно настраивать от кристально чистого до слегка или даже сильно перегруженного.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F504.png?alt=media&token=444ffb42-6db6-416a-8257-b0eff8f93395",
  },
  {
    id: 505,
    name: "Комбоусилитель Vox Pathfinder 10 Bass",
    price: 573.92,
    description:
      "Оснащен лампой 6L6, обеспечивающей широкий диапазон звучаний от прозрачного чистого до пламенного перегруза.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F505.png?alt=media&token=1ff91b24-d82d-41e4-8a8c-04da632e98a5",
  },
  {
    id: 601,
    name: "Педаль эффектов MXR M81 Bass Preamp",
    price: 792.6,
    description:
      "Педаль представляет собой стереофонический аналоговый хорус/фленджер, который был спроектирован специально для работы с бас гитарой.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F601.png?alt=media&token=59d8a7e3-7670-4b7b-aef3-e74a23d060d1",
  },
  {
    id: 602,
    name: "Педаль эффектов Electro-Harmonix Bass Soul Food Overdrive",
    price: 494.0,
    description:
      "Это уникальная инновационная педаль, которая придает гитарам выразительность человеческого голоса.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F602.png?alt=media&token=3a20b33b-7991-4c86-801b-a8d2bce9a29f",
  },
  {
    id: 603,
    name: "Педаль эффектов Blackstar LT DUAL",
    price: 431.0,
    description:
      "Главная особенность данной педали в том, что она даёт возможность перегружать гитару, без потери основного тона.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F603.png?alt=media&token=fa0c3074-fab1-4aba-9179-2798b8e7afa2",
  },
  {
    id: 604,
    name: "Педаль эффектов Nux NSS-4 Pulse IR-Loader",
    price: 300.0,
    description:
      "Предусилитель обеспечивает кристально чистое качество звучания и не занимает много места - вы можете уместить его в самый скромный по размерам педалборд.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F604.png?alt=media&token=5a057640-7d00-4e6f-93e9-bccde25882d1",
  },
  {
    id: 605,
    name: "Педаль эффектов Blackstar LT-DIST",
    price: 654.87,
    description:
      "Регуляторы Bass и Treble позволяют убрать или добавить низкие и высокие частоты.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F605.png?alt=media&token=538ec811-9f41-4dea-8fa0-07ee67c0b09d",
  },
  {
    id: 606,
    name: "Педаль эффектов Boss VO-1 Vocoder",
    price: 977.0,
    description:
      "Педаль выполнена в компактном металлическом корпусе и питается от батарейки 9В, блока питания 9В или фирменного блока для нескольких педалей (докупаются отдельно).",
    image:
      "https://firebasestorage.googleapis.com/v0/b/guitar-store-55af4.appspot.com/o/images%2F606.png?alt=media&token=661d2e85-8ef3-447b-8e2f-79c1dacd9b38",
  },
];

module.exports = {
  guitars,
  accessories,
};
