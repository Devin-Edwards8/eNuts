import Navbar from "../../components/Navbar/Navbar";
import "./Map.css";

function Map() {
  return (
    <div className="map">
      <Navbar location="map" />
      <h1 id="map-title">Find A Store</h1>
      <div id="map-area">
        <div className="search-area">
          <p>search bar for stores</p>
          <p>locations appear hear</p>
        </div>
        <iframe
          width="75%"
          height="100%"
          className="google-map"
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ3xY3JCdjUjoRYRjM7iwVOXY&key=AIzaSyBTF6K9I4h2Vx7xPiC2q_hhsIHOcyRClPc"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
