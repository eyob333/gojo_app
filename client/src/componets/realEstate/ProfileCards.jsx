import { Link } from "react-router-dom";
import "./ProfileCards.css";

function ProfileCards({ name, icon }) {
  return (
    <div className="container-profile-card">
      <div className="card">
        <h2>{name} RealEstate</h2>
        <i className="fas fa-arrow-right"></i>
        <p>properties</p>
        <div className="pic" style={{ backgroundImage: `url(${icon})` }}></div>
        <div className="social">
          <i className="fab fa-facebook-f">{'> '}</i>
          <i className="fab fa-twitter">{'> '}</i>
          <i className="fab fa-instagram">{'> '}</i>
          <i className="fab fa-github">{'> '}</i>
        </div>
        <Link to={name}>
          <button>more</button>
        </Link>
      </div>
    </div>
  );
}

export default ProfileCards;
