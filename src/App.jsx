import React, { useState, useEffect } from 'react';
import './App.css';
import productData from './Data'

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

  const [bgBlurLevel, setBgBlur] = useState(-1);
  const changeBackgroundImageHandler = (e) => {
    if (bgBlurLevel >= 0) {
    document.body.style.backgroundImage = `url(${e.target.src})`;
    }
  };
  
  const resetBackgroundImageHandler = () => {
    document.body.style.backgroundImage = 'none';
  };

  const blurBgHandler = (e) => {
    const blurLevel = parseInt(e.target.value);
    setBgBlur(blurLevel);
  
    if (blurLevel === -1) {
      resetBackgroundImageHandler
    } else {
      document.body.style.backdropFilter = `blur(${blurLevel}px)`;
    }
  };
  

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
                    onMouseOver={changeBackgroundImageHandler}
                    onMouseOut={resetBackgroundImageHandler} />
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
                <div className="coupon-inner">

                </div>
              </div>

              <div className="offer">
                <p>{product.offer}%</p>
                <p>Off</p>
              </div>
            </div>
          </div>
        ))}
        <p className='credit'>Adjust background Blur: <input type="range" min={-1} max={8} value={bgBlurLevel} onChange={blurBgHandler} /> {bgBlurLevel === -1 ? "off" : bgBlurLevel}</p>
        <p className='credit'>LinkedIn: <a target='_blank' href="https://www.linkedin.com/in/03prashantpk">03prashantpk</a></p>
        <p className='credit'>Other Projects: <a target='_blank' href="https://enally.in/projects">Projects Lists</a></p>
        <p className='credit'>Website: <a target='_blank' href="https://enally.in/">Enally.in</a></p>


      </div>
    </>


  );
}

export default App;
