// data.js
import phoneImage from './img/phone.jpg';
import clothesImage from './img/clothes.jpg';


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
    title: 'Electronic 1',
    price: 9.99,
    imageUrl: phoneImage,
    category: 'Electronics',
  },
  {
    id: 2,
    title: 'Clothing 1',
    price: 19.99,
    imageUrl: clothesImage,
    category: 'Clothing',
  }

];
