// data.js
import phoneImage from './img/phone.jpg';
import clothesImage from './img/clothes.jpg';


export const users = [
  { id: 12345, name: "Alice" },
  { id: 23456, name: "Bob" },
  { id: 34567, name: "Charlie" },
  { id: 45678, name: "Bird" },
  { id: 56789, name: "Mary" },
  { id: 67890, name: "Jackson" }
];


export const products = [
  {
    id: 1,
    title: 'iPhone15 256G',
    price: 9.99,
    imageUrl: phoneImage,
    category: 'Electronics',
  },
  {
    id: 2,
    title: 'Dorothee Schumacher Midi dress',
    price: 19.99,
    imageUrl: clothesImage,
    category: 'Clothing',
  },
  {
    id: 3,
    title: 'The Black Book of Colors',
    price: 208,
    category: 'Clothing',
    stock: 100,
  },
  {
    id: 4,
    title: 'Calvin Klein Denim Bucket Hat',
    price: 490,
    category: 'Accessories', 
    stock: 100,
  }

];
