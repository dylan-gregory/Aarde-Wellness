import React from 'react';

export default React.createClass({
  render(){
    return(
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="center brand-logo">Aarde Wellness</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">Home</a></li>
                <li><a href="badges.html">About</a></li>
                <li><a href="collapsible.html">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="container-fluid">
          <div className="row head">
            <div className="col l9 head-photo">
              <img src="./images/aarde-mountain.jpg"/>
            </div>
          </div>

          <div className="row who-we-are">
            <div className="col l9 offset-l3">
              <div className="about-us">
                Aarde is the Dutch word for “earth.” Founded in 2016, Aarde Wellness was birthed out of a dream to help others live happier, healthier lives utilising the incredible riches of this beautiful planet. Founder Bridget Vogel Gregory believes God gave us a storehouse of goodness and we must take advantage of it. She combines research in essential oil aromatherapy, organic nutrition and holistic coaching to help you discover your most grounded, happiest, healthiest you. Please join us on the journey!
              </div>
            </div>
          </div>

          <div className="row program-head">
            We believe God gave us an abundance of health through the world he created. We want to help people discover true wellness, true vitality, true life by embracing the beauty of the earth. Be grounded. Be happy. Be healthy.

            <h2>"Here's how we can help"</h2>
          </div>

          <div className="row program-list">

            <div className="col l4 program-1">
              <h3>90 Habit Change</h3>
            </div>

            <div className="col l4 program-2">
              <h3>90 Habit Change</h3>
            </div>

            <div className="col l4 program-3">
              <h3>90 Habit Change</h3>
            </div>

          </div>

        </div>
      </div>
    )
  }
});
