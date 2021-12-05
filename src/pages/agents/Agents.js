import React from 'react';
import './Agents.css';
import agent1 from '../../img/agent1.jpg';
import agent2 from '../../img/agent2.jpg';
import agent3 from '../../img/agent3.jpg';
import agent4 from '../../img/agent4.jpeg';
import agent5 from '../../img/agent5.jpeg';
import agent6 from '../../img/agent6.jpg';

function Agents() {
  return (
    <div>
      <div className='hero-container'>
        <form className='home-form'>
          <input type='text' placeholder='City or zip code' />
          <input type='submit' value='Search' className='home-send-btn' />
        </form>
        <br />
        <h1>Client satisfaction is our priority</h1>
      </div>
      <br />

      <div className='options-section'>
        <h1>Our Agents</h1>
        <div className='options'>
          <div className='option'>
            <img src={agent1} alt='img' className='agent-img' />
            <h3>Wise Thompson</h3>
            <p>Property Manager</p>
            <p>
              A high-touch broker known for his extensive Managment skills and
              his unmatched devotion to clients.
            </p>
            <small>
              <i className='fas fa-envelope'></i> &nbsp; wise@ralphsestate.com
            </small>
          </div>
          <div className='option'>
            <img src={agent4} alt='img' className='agent-img' />
            <h3>Racheal Kim</h3>
            <p>Negotiation Expert</p>
            <p>
              Did you know that only 1% of all Realtors have earned the CNE
              (Certified Negotiation Expert) designation? Kim is one of them
            </p>
            <small>
              <i className='fas fa-envelope'></i> &nbsp;
              rachael@ralphsestate.com
            </small>
          </div>
          <div className='option'>
            <img src={agent2} alt='img' className='agent-img' />
            <h3>Stewart Lenon</h3>
            <p>Mortgage Broker</p>

            <p>
              A realtor with expertise in negotiating rent-to-own deals earning
              him the reputation as one of the most prolific middleman in the
              business
            </p>
            <small>
              <i className='fas fa-envelope'></i> &nbsp;
              stewart@ralphsestate.com
            </small>
          </div>
          <div className='option'>
            <img src={agent5} alt='img' className='agent-img' />
            <h3>Consoline Pages</h3>
            <p>Realtor</p>

            <p>
              Consoline brings fourteen years of experience in real estate,
              excellent customer service and a commitment to work hard, listen
              and follow through.
            </p>
            <small>
              <i className='fas fa-envelope'></i> &nbsp;
              consoline@ralphsestate.com
            </small>
          </div>
          <div className='option'>
            <img src={agent6} alt='img' className='agent-img' />
            <h3>Desire Kings</h3>
            <p>Intern</p>

            <p>
              Ralph's-Estate latest recruite providing assistance to clients
              with investment advice and property acquisition. Desire's passion
              for real estate is apparent through his commitment to the team
            </p>
            <small>
              <i className='fas fa-envelope'></i> &nbsp; desire@ralphsestate.com
            </small>
          </div>
          <div className='option'>
            <img src={agent3} alt='img' className='agent-img' />
            <h3>Pride Write</h3>
            <p>Mortgage Broker</p>

            <p>
              A conscientious Realtor who exudes credibility, commitment, and
              determination. His excellent communication skills and friendly
              approach makes him an smooth agent.
            </p>
            <small>
              <i className='fas fa-envelope'></i> &nbsp; pride@ralphsestate.com
            </small>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Agents;
