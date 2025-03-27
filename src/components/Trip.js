import "./TripStyles.css";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>

      <div className="tripcard">
        <div className="t-card">
          <div className="t-image">
            <img src="assets/five.jpg" alt="image" />
          </div>

          <div>
            <h2>Trip in Indonesia</h2>
            <p>
              Indonesia, officially the Republic of Indonesia, is a country in
              Southeast Asia and Oceania between the Indian and Pacific oceans.
              It consists of over 17,000 islands, including Sumatra, Java,
              Sulawesi, and parts of Borneo and New Guinea.
            </p>
          </div>
        </div>

        <div className="t-card">
          <div className="t-image">
            <img src="assets/eight.jpg" alt="image" />
          </div>

          <div>
            <h2>Trip in Malaysia</h2>
            <p>
              Malaysia is a Southeast Asian country occupying parts of the Malay
              Peninsula and the island of Borneo offer stunning natural beauty.
              It's known for its beaches, rainforests and mix of Malay, Chinese,
              Indian and European cultural influences.
            </p>
          </div>
        </div>

        <div className="t-card">
          <div className="t-image">
            <img src="assets/six.jpg" alt="image" />
          </div>

          <div>
            <h2>Trip in France</h2>
            <p>
              France, in Western Europe, is home to medieval cities, charming
              alpine villages, and scenic Mediterranean beaches. Its capital,
              Paris, boasts world-renowned art museums like the Louvre and
              iconic landmarks such as the Eiffel Tower.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trip;
