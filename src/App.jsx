import React, { useState, useEffect } from 'react';
import './App.css';

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

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

function App() {
  const [shuffledProducts, setShuffledProducts] = useState(productData);

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledProducts((prevProducts) => {
        return prevProducts.map((product) => {
          const shuffledImages = shuffleArray(product.images);
          return { ...product, images: shuffledImages };
        });
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const chnageBackgroundImagehandler = (e) => {
    // console.log(e.target.src)
    document.body.style.backgroundImage = `url(${e.target.src})`;
  }

  const resetbackgroundImageHandler = () => {
    document.body.style.backgroundImage = `url("")`;
  }
  const [bgBlurLevel, setBgblur] = useState(0)
  const blurBgHandler = (e) => {
    setBgblur(e.target.value)
    document.body.style.backdropFilter = `blur(${e.target.value}px)`
  }

  return (
    <>
      <h1>Task + Practice</h1>
      <div className="card-outer">

        {shuffledProducts.map((product) => (
          <div className="card" key={product.id}>
            <div className="card-inner">
              <div className="card-head">
                {product.images.map((image, index) => (
                  <img key={index} src={image} alt={`product${index + 1}`}
                    onMouseOver={chnageBackgroundImagehandler}
                    onMouseOut={resetbackgroundImageHandler} />
                ))}
                <p className='offerOff'>-25%</p>
                <p className='like'>
                  <i className="fal fa-heart"></i>
                </p>
              </div>

              <div className="card-name-price">
                <h3>{product.name}</h3>
                <p>{product.price} <br /><small> <strike>{product.original_price}</strike> </small></p>

              </div>

              <div className="card-color-size">
                <div className="color">
                  <button></button>
                  <button></button>
                  <button></button>
                </div>

                <div className="size">
                  <button>S</button>
                  <button>M</button>
                  <button>L</button>
                </div>
              </div>

              <div className="rating-buy">
                <p><i class="fal fa-star"></i> 4B</p>
                <p>Buy +</p>
              </div>
            </div>

            <div className="card-footer">
              <div className="coupon">
                <p>Monday Happy</p>
                <p>Monmpy</p>
              </div>

              <div className="offer">
                <p>{product.offer}%</p>
                <p>Off</p>
              </div>
            </div>
          </div>
        ))}
        <p className='credit'>Adjust background Blur: <input type="range" min={0} max={8} value={bgBlurLevel} onChange={blurBgHandler} /> {bgBlurLevel}</p>
        <p className='credit'>LinkedIn: <a target='_blank' href="https://www.linkedin.com/in/03prashantpk">03prashantpk</a></p>
        <p className='credit'>Other Projects: <a target='_blank' href="https://enally.in/projects">Projects Lists</a></p>
        <p className='credit'>Website: <a target='_blank' href="https://enally.in/">Enally.in</a></p>


      </div>
    </>


  );
}

export default App;
