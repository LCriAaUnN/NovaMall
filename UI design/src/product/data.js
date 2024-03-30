// data.js
import phoneImage1 from './img/phone1.jpeg';
import phoneImage2 from './img/phone2.jpeg';
import phoneImage3 from './img/phone3.jpeg';
import clothesImage from './img/clothes.jpg';
import clothesImage1 from './img/clothes1.jpg';
import clothesImage1_1 from './img/clothes1-1.jpg';
import clothesImage1_2 from './img/clothes1-2.jpg';
import clothesImage1_3 from './img/clothes1-3.jpg';
import book from './img/book.jpg';
import hat1 from './img/hat.jpg';
import hat2 from './img/hat2.jpg';
import hat3 from './img/hat3.jpg';



export const users = [
  { id: 12345, name: "Alice" },
  { id: 23456, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];


export const products = [
  {
    id: 1,
    title: 'iPhone 15 256G',
    price: 6999,
    imageUrl: [phoneImage3, phoneImage2, phoneImage1], 
    category: 'Electronics',
    description: `
      · 15 cm (6.1-inch) Super Retina XDR display
      · Cinematic mode adds shallow depth of field and shifts focus automatically in your videos
      · Advanced dual-camera system with 12MP Wide and Ultra Wide cameras;
        Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording
      · 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
      · A15 Bionic chip for lightning-fast performance
    `, 
    stock: 100, 
  },
  {
    id: 2,
    title: 'Dorothee Schumacher Midi dress',
    price: 3000,
    imageUrl: [clothesImage1, clothesImage1_1, clothesImage1_2, clothesImage1_3],
    category: 'Clothing',
    description: `
    Neckline: rollneck
    Fastening: button placket, side zip
    Sleeve: long sleeves, single-button cuffs, ruched shoulder
    Lining: lined
    EXTRAS: light quality
    Pattern: floral
    Outer material: 65% viscose, 35% silk
    Lining material: 100% viscose
    Manufacturer's care instructions: 30°C gentle machine wash
    `,
    stock: 100,
  },
  {
    id: 3,
    title: 'The Black Book of Colors',
    price: 208,
    imageUrl: [book],
    category: 'Clothing',
    description: `
    · Breathtaking in simplicity, bold in impact ― Washington Post
    · Fascinating, challenging and lovely ― Kirkus Reviews
    · The pages are black, but the readers' imagination and senses are sparked to
      allow them to experience a rainbow of colours ― Manchester Evening News
    · Completely different to all the other picture-books…innovative. ― INIS`,
    stock: 100,
  },
  {
    id: 4,
    title: 'Calvin Klein Denim Bucket Hat',
    price: 490,
    imageUrl: [hat1, hat2, hat3],
    category: 'Accessories', 
    description: `Crafted from wash denim with a soft finish, this bucket hat from Calvin Klein Jeans
    features a cK Monogram embroidery on the front.
    • Washed denim
    • Topstitched brim
    • cK Monogram embroidery on the front
    • Flat crown`,
    stock: 100,
  },

];
