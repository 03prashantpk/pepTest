import product1_1 from './assets/product1.1.webp';
import product1_2 from './assets/product1.2.webp';
import product1_3 from './assets/product1.3.webp';

import product2_1 from './assets/product2.1.webp';
import product2_2 from './assets/product2.2.webp';
import product2_3 from './assets/product2.3.webp';

import product3_1 from './assets/product3.1.webp';
import product3_2 from './assets/product3.2.webp';
import product3_3 from './assets/product3.3.webp';

import product4_1 from './assets/product4.1.webp';
import product4_2 from './assets/product4.2.webp';
import product4_3 from './assets/product4.3.webp';

const productData = [
  {
    id: 1,
    name: 'White Traditional Long Dress',
    price: '$3.99',
    original_price: "$4.99",
    offer: '20',
    images: [product1_1, product1_2, product1_3],
  },
  {
    id: 2,
    name: 'Red Beautiful Full Length Dress',
    price: '$9.99',
    original_price: "$10.99",
    offer: '10',
    images: [product2_1, product2_2, product2_3],
  },
  {
    id: 3,
    name: 'Butterfly Yellow Dress',
    price: '$19.99',
    original_price: "$24.99",
    offer: '38',
    images: [product3_1, product3_2, product3_3],
  },
  {
    id: 4,
    name: 'Party Wear Colorful',
    price: '$14.99',
    original_price: "$20.99",
    offer: '26',
    images: [product4_1, product4_2, product4_3],
  },
];

export default productData;