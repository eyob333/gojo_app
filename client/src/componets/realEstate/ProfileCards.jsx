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
          <i className="fab fa-facebook-f">s</i>
          <i className="fab fa-twitter">s</i>
          <i className="fab fa-instagram">s</i>
          <i className="fab fa-github">so</i>
        </div>
        <Link to={name}>
          <button>more</button>
        </Link>
      </div>
    </div>
  );
}

export default ProfileCards;
