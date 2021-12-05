import React from 'react';
import './Home.css';
import home1 from '../../img/renttoown1.jpg';
import home2 from '../../img/renttoown2.jpg';
import home3 from '../../img/renttoown3.jpg';

function Home() {
  return (
    <div>
      <div className='home-hero-container'>
        <form className='home-form'>
          <input type='text' placeholder='City or zip code' />
          <input type='submit' value='Search' className='home-send-btn' />
        </form>
        <br />
        <h1>Your dream home is our priority</h1>
      </div>

      {/* options */}
      <div className='options-section'>
        <div className='options'>
          <div className='option'>
            <i className='fas fa-credit-card'></i>
            <h3>Buy</h3>
            <p>Get your dream home at the most affordabble prices</p>
            <small>learn more</small>
          </div>
          <div className='option'>
            <i className='fas fa-hand-holding-usd'></i>

            <h3>Sell</h3>
            <p>
              With our network or clients, sell your homes in a short time and
              at the right price
            </p>
            <small>learn more</small>
          </div>
          <div className='option'>
            <i className='fas fa-house-user'></i>
            <h3>Rent</h3>
            <p>Find a home away from home from our array of houses</p>
            <small>learn more</small>
          </div>
        </div>
      </div>

      <br />

      <div className='rent-to-own'>
        <h1 className='rent-to-own-heading'>Rent-to-Own</h1>
        <div className='rent-to-own-body'>
          <div className='rent-to-own-info'>
            <div className='rent-to-own-note'>
              <h2>Find your dream home</h2>
              <p>
                The first step to owning your dream home is actually finding the
                dream home. Ralph's Estate has a reputation of meeting client's
                expectations of a dream home
              </p>
            </div>
            <img src={home1} alt='img' />
          </div>

          <div className='rent-to-own-info'>
            <img src={home2} alt='img' />

            <div className='rent-to-own-note'>
              <h2>Home appraisal</h2>
              <p>
                Carry out an independent appraisal on the home before deciding
                on the rent-to-own price. Our experts are here to guide you
                through this process
              </p>
            </div>
          </div>

          <div className='rent-to-own-info'>
            <div className='rent-to-own-note'>
              <h2>Rent-to-own agreement</h2>
              <p>
                Sign a rent-to-own aggreement and pay a portion of your monthly
                income over a period of 1 to 10 years to own the house
              </p>
            </div>
            <img src={home3} alt='img' />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Home;
