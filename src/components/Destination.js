import "./DestinationStyles.css";
import firstImg from "../assets/first.jpg";
import twoImg from "../assets/two.jpg";
import threeImg from "../assets/three.jpg";
import fourImg from "../assets/four.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>

      <div className="first-des">
        <div className="des-text">
          <h2>Taal Volcano, Batangas</h2>
          <p>...</p>
        </div>

        <div className="image">
          <img src={firstImg} alt="image" />
          <img src={twoImg} alt="image" />
        </div>
      </div>

      <div className="first-des-reverse">
        <div className="des-text">
          <h2>Mt. Daguldul, Batangas</h2>
          <p>...</p>
        </div>

        <div className="image">
          <img src={threeImg} alt="image" />
          <img src={fourImg} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Destination;
