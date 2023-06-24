import { useState } from 'react'
import './App.css'
import productimage1_1 from './assets/product1.1.webp';
import productimage1_2 from './assets/product1.1.webp';
import productimage1_3 from './assets/product1.1.webp';

function App() {

  const changeImageHandler = () => {

  }

  return (
    <div className='card-outer'>

      <div className="card" onMouseOver={changeImageHandler}>
        <div className="card-inner">
          <div className='card-head'>
            <img src={productimage1_2} alt="product1" id='product1' />
            <img src={productimage1_3} alt="product2" id='product2' />
            <img src={productimage1_1} alt="product3" id='product3' />
            <p><i class="fal fa-heart"></i></p>
          </div>

          <div className="card-name-price">
            <h3>White Traditional Long Dress</h3>
            <p>$3.99</p>
          </div>

          <div className="card-color-size">
            <div className='color'>
              <button></button>
              <button></button>
              <button></button>
            </div>

            <div className='size'>
              <button>S</button>
              <button>M</button>
              <button>L</button>
            </div>
          </div>

          <div className="rating-buy">
            <p>4B</p>
            <p>Buy +</p>
          </div>
        </div>

        <div className="card-footer">
          <div className="coupon">
            <p>Monday Happy</p>
            <p>Monmpy</p>
          </div>

          <div className="offer">
            <p>20%</p>
            <p>Off</p>
          </div>
        </div>

      </div>

      <div className="card" onMouseOver={changeImageHandler}>
        <div className="card-inner">
          <div className='card-head'>
            <img src={productimage1_2} alt="product1" id='product1' />
            <img src={productimage1_3} alt="product2" id='product2' />
            <img src={productimage1_1} alt="product3" id='product3' />
            <p><i class="fal fa-heart"></i></p>
          </div>

          <div className="card-name-price">
            <h3>White Traditional Long Dress</h3>
            <p>$3.99</p>
          </div>

          <div className="card-color-size">
            <div className='color'>
              <button></button>
              <button></button>
              <button></button>
            </div>

            <div className='size'>
              <button>S</button>
              <button>M</button>
              <button>L</button>
            </div>
          </div>

          <div className="rating-buy">
            <p>4B</p>
            <p>Buy +</p>
          </div>
        </div>

        <div className="card-footer">
          <div className="coupon">
            <p>Monday Happy</p>
            <p>Monmpy</p>
          </div>

          <div className="offer">
            <p>20%</p>
            <p>Off</p>
          </div>
        </div>

      </div>


      <div className="card" onMouseOver={changeImageHandler}>
        <div className="card-inner">
          <div className='card-head'>
            <img src={productimage1_2} alt="product1" />
            <img src={productimage1_3} alt="product1" />
            <img src={productimage1_1} alt="product1" />
            <p><i class="fal fa-heart"></i></p>
          </div>

          <div className="card-name-price">
            <h3>White Traditional Long Dress</h3>
            <p>$3.99</p>
          </div>

          <div className="card-color-size">
            <div className='color'>
              <button></button>
              <button></button>
              <button></button>
            </div>

            <div className='size'>
              <button>S</button>
              <button>M</button>
              <button>L</button>
            </div>
          </div>

          <div className="rating-buy">
            <p>4B</p>
            <p>Buy +</p>
          </div>
        </div>

        <div className="card-footer">
          <div className="coupon">
            <p>Monday Happy</p>
            <p>Monmpy</p>
          </div>

          <div className="offer">
            <p>20%</p>
            <p>Off</p>
          </div>
        </div>

      </div>


      <div className="card" onMouseOver={changeImageHandler}>
        <div className="card-inner">
          <div className='card-head'>
            <img src={productimage1_2} alt="product1" />
            <img src={productimage1_3} alt="product1" />
            <img src={productimage1_1} alt="product1" />
            <p><i class="fal fa-heart"></i></p>
          </div>

          <div className="card-name-price">
            <h3>White Traditional Long Dress</h3>
            <p>$3.99</p>
          </div>

          <div className="card-color-size">
            <div className='color'>
              <button></button>
              <button></button>
              <button></button>
            </div>

            <div className='size'>
              <button>S</button>
              <button>M</button>
              <button>L</button>
            </div>
          </div>

          <div className="rating-buy">
            <p>4B</p>
            <p>Buy +</p>
          </div>
        </div>

        <div className="card-footer">
          <div className="coupon">
            <p>Monday Happy</p>
            <p>Monmpy</p>
          </div>

          <div className="offer">
            <p>20%</p>
            <p>Off</p>
          </div>
        </div>

      </div>


    </div>
  )
}

export default App
