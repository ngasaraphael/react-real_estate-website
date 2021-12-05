import React from 'react';
import { Link } from 'react-router-dom';
import './NewHomes.css';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';
import img4 from '../../img/img4.jpg';
import img5 from '../../img/img5.jpg';
import img8 from '../../img/img8.jpg';
import img11 from '../../img/img11.jpg';
import img12 from '../../img/img12.jpg';
import img13 from '../../img/img13.jpg';

const NewHome = () => {
  return (
    <div>
      <div className='house-cards'>
        <h1>New Houses</h1> <br /> <br />
        <br />
        <div className='cards'>
          <div className='card'>
            <img src={img4} alt='img' />
            <h3>Single family house</h3>
            <div className='house-details'>
              <div className='house-detail'>
                <i className='fas fa-map-marker-alt'></i>
                <p>57080, Köln</p>
              </div>
              <div className='house-detail'>
                <i className='fas fa-sitemap'></i>
                <p>
                  200 meters<sup>2</sup>
                </p>
              </div>
              <div className='house-detail'>
                <i className='fas fa-bed'></i>
                <p>5 bedrooms</p>
              </div>
            </div>
            <div className='house-details'>
              <p className='price'>
                Purchase price : <span>€360.000.00</span>
              </p>

              <Link className='agentLink' to='contact'>
                <button className='contactAgent'>Contact Agent</button>
              </Link>
            </div>
          </div>
          <div className='card'>
            <img src={img2} alt='img' />
            <h3>Modern house</h3>
            <div className='house-details'>
              <div className='house-detail'>
                <i className='fas fa-map-marker-alt'></i>
                <p>38927, Dormagen</p>
              </div>
              <div className='house-detail'>
                <i className='fas fa-sitemap'></i>
                <p>
                  170 metres<sup>2</sup>
                </p>
              </div>
              <div className='house-detail'>
                <i className='fas fa-bed'></i>
                <p>3 bedrooms</p>
              </div>
            </div>
            <div className='house-details'>
              <p className='price'>
                Purchase price : <span>€290.000.00</span>
              </p>

              <Link className='agentLink' to='contact'>
                <button className='contactAgent'>Contact Agent</button>
              </Link>
            </div>
          </div>

          <div className='card'>
            <img src={img3} alt='img' />
            <h3>Small mansion with pool</h3>
            <div className='house-details'>
              <div className='house-detail'>
                <i className='fas fa-map-marker-alt'></i>
                <p>47379, Eiserfeld</p>
              </div>
              <div className='house-detail'>
                <i className='fas fa-sitemap'></i>
                <p>
                  290 metres<sup>2</sup>
                </p>
              </div>
              <div className='house-detail'>
                <i className='fas fa-bed'></i>
                <p>4 bedrooms</p>
              </div>
            </div>
            <div className='house-details'>
              <p className='price'>
                Purchase price : <span>€400.000.00</span>
              </p>

              <Link className='agentLink' to='contact'>
                <button className='contactAgent'>Contact Agent</button>
              </Link>
            </div>
          </div>
          <div className='card'>
            <img src={img12} alt='img' />
            <h3>Country-side home</h3>
            <div className='house-details'>
              <div className='house-detail'>
                <i className='fas fa-map-marker-alt'></i>
                <p>38495, Siegen</p>
              </div>
              <div className='house-detail'>
                <i className='fas fa-sitemap'></i>
                <p>
                  230 metres<sup>2</sup>
                </p>
              </div>
              <div className='house-detail'>
                <i className='fas fa-bed'></i>
                <p>3 bedrooms</p>
              </div>
            </div>
            <div className='house-details'>
              <p className='price'>
                Purchase price : <span>€180.000.00</span>
              </p>

              <Link className='agentLink' to='contact'>
                <button className='contactAgent'>Contact Agent</button>
              </Link>
            </div>
          </div>
          <div className='card'>
            <img src={img13} alt='img' />
            <h3>Country-side mansion</h3>
            <div className='house-details'>
              <div className='house-detail'>
                <i className='fas fa-map-marker-alt'></i>
                <p>39927, Siegen</p>
              </div>
              <div className='house-detail'>
                <i className='fas fa-sitemap'></i>
                <p>
                  240 metres<sup>2</sup>
                </p>
              </div>
              <div className='house-detail'>
                <i className='fas fa-bed'></i>
                <p>6 bedrooms</p>
              </div>
            </div>
            <div className='house-details'>
              <p className='price'>
                Purchase price : <span>€220.000.00</span>
              </p>

              <Link className='agentLink' to='contact'>
                <button className='contactAgent'>Contact Agent</button>
              </Link>
            </div>
          </div>
          <div className='card'>
            <img src={img5} alt='img' />
            <h3>White villa</h3>
            <div className='house-details'>
              <div className='house-detail'>
                <i className='fas fa-map-marker-alt'></i>
                <p>61062, Bonn</p>
              </div>
              <div className='house-detail'>
                <i className='fas fa-sitemap'></i>
                <p>
                  220 metres<sup>2</sup>
                </p>
              </div>
              <div className='house-detail'>
                <i className='fas fa-bed'></i>
                <p>4 bedrooms</p>
              </div>
            </div>
            <div className='house-details'>
              <p className='price'>
                Purchase price : <span>€270.000.00</span>
              </p>

              <Link className='agentLink' to='contact'>
                <button className='contactAgent'>Contact Agent</button>
              </Link>
            </div>
          </div>
          <div className='card'>
            <img src={img8} alt='img' />
            <h3>Pent house</h3>
            <div className='house-details'>
              <div className='house-detail'>
                <i className='fas fa-map-marker-alt'></i>
                <p>28474, Krueztal</p>
              </div>
              <div className='house-detail'>
                <i className='fas fa-sitemap'></i>
                <p>
                  190 metres<sup>2</sup>
                </p>
              </div>
              <div className='house-detail'>
                <i className='fas fa-bed'></i>
                <p>3 bedrooms</p>
              </div>
            </div>
            <div className='house-details'>
              <p className='price'>
                Purchase price : <span>€300.000.00</span>
              </p>

              <Link className='agentLink' to='contact'>
                <button className='contactAgent'>Contact Agent</button>
              </Link>
            </div>
          </div>
          <div className='card'>
            <img src={img11} alt='img' />
            <h3>Pool house</h3>
            <div className='house-details'>
              <div className='house-detail'>
                <i className='fas fa-map-marker-alt'></i>
                <p>99474, Marburger</p>
              </div>
              <div className='house-detail'>
                <i className='fas fa-sitemap'></i>
                <p>
                  250 metres<sup>2</sup>
                </p>
              </div>
              <div className='house-detail'>
                <i className='fas fa-bed'></i>
                <p>2 bedrooms</p>
              </div>
            </div>
            <div className='house-details'>
              <p className='price'>
                Purchase price : <span>€170.000.00</span>
              </p>
              <Link className='agentLink' to='contact'>
                <button className='contactAgent'>Contact Agent</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHome;
