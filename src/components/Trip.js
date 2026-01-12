import "./TripStyles.css";
import fiveImg from "../assets/five.jpg";
import eightImg from "../assets/eight.jpg";
import sixImg from "../assets/six.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>

      <div className="tripcard">
        <div className="t-card">
          <div className="t-image">
            <img src={fiveImg} alt="Indonesia trip" />
          </div>
          <div>
            <h2>Trip in Indonesia</h2>
            <p>Indonesia, officially the Republic of Indonesia...</p>
          </div>
        </div>

        <div className="t-card">
          <div className="t-image">
            <img src={eightImg} alt="Malaysia trip" />
          </div>
          <div>
            <h2>Trip in Malaysia</h2>
            <p>Malaysia is a Southeast Asian country...</p>
          </div>
        </div>

        <div className="t-card">
          <div className="t-image">
            <img src={sixImg} alt="France trip" />
          </div>
          <div>
            <h2>Trip in France</h2>
            <p>France, in Western Europe, is home to medieval cities...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trip;
