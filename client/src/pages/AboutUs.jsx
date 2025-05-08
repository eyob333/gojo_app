import './pagesCss/about.css';


const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">ABOUT US</h1>
        <p className="about-subtitle">
          Learn more about our company and what we do.
        </p>
      </div>

      <div className="about-section mission">
        <div className="icon"><i className="fas fa-bullseye"></i></div>
        <div>
          <h2>Our Mission</h2>
          <p>
            We aim to provide the best services to our clients and drive innovation in everything we do.
          </p>
        </div>
      </div>

      <div className="about-section history">
        <div className="icon"><i className="fas fa-university"></i></div>
        <div>
          <h2>Our History</h2>
          <p>
            Founded in 2010, our company has grown from a small startup to a global player.
          </p>
        </div>
      </div>

      <div className="about-section team">
        <div className="icon"><i className="fas fa-users"></i></div>
        <div>
          <h2>Our Team</h2>
          <p>
            Our team is composed of creative, passionate professionals dedicated to excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

