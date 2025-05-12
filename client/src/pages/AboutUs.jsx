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
          We aim to provide the best services to our clients and drive innovation in everything we do. In the often complex world of real estate, people can unfortunately face scams, misinformation, and make significant investments without concrete evidence. We aim to be a reliable beacon, offering you transparency, speed, and significant cost savings by providing trustworthy and verifiable information every step of the way.
          </p>
        </div>
      </div>

      <div className="about-section history">
        <div className="icon"><i className="fas fa-university"></i></div>
        <div>
          <h2>Our values</h2>
          <p>
            <strong>Excellence:</strong> The mission statement mentions striving to provide the best services and the team is described as "dedicated to excellence.
            <br />
            Innovation: The mission explicitly states the aim to drive innovation in everything we do.
            <br />
            <strong >Reliability:</strong> The added text emphasizes the goal of avoiding scams and providing "reliable" and "trustworthy" information, suggesting a strong value placed on integrity.
            <br />
            <strong>Client Focus:</strong> The mission starts with the aim to provide the "best services to our clients," indicating a priority on meeting client needs.
            <br />
            <strong>Transparency:</strong> The desire to avoid misinformation and provide "concrete evidence" points towards a value of openness and clarity.
            <br />
            <strong>Efficiency:</strong> The added text highlights the aim to offer "speed" and "cost savings," suggesting a value placed on streamlined and economical solutions.
             <br />
            <strong>Expertise:</strong> Describing the team as "creative, passionate professionals" indicates a value for skilled and dedicated individuals.
          </p>
        </div>
      </div>

      <div className="about-section team">
        <div className="icon"><i className="fas fa-users"></i></div>
        <div>
          <h2>Our Team</h2>
          <p>
          Our strength lies in our collaborative and diverse team, composed of creative 
          and visionary architects who bring innovative design solutions to every project. Their expertise ensures aesthetically pleasing and functionally sound outcomes. Complementing their vision are our dedicated sales professionals, who are passionate about understanding client needs and building lasting relationships based on trust and transparency. Powering our technological edge is our talented group of software engineers, who develop cutting-edge tools and platforms to deliver efficiency, reliability, and seamless experiences for our clients. This synergy between design, client engagement, and technological prowess allows us to provide truly comprehensive and exceptional services.          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

