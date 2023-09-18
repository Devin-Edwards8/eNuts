import Navbar from "../../components/Navbar/Navbar";
import Store from "../../components/Store/Store";
import "./Map.css";

function Map() {
  const locations = [
    {
      name: "eNuts",
      address: "No-6, Parijatham St, Jyothi Nagar, Annanur, Ambattur, Chennai, Tamil Nadu 600062, India"
    },
    {
      name: "eNuts",
      address: "No-6, Parijatham St, Jyothi Nagar, Annanur, Ambattur, Chennai, Tamil Nadu 600062, India"
    }
  ]

  return (
    <div className="map">
      <Navbar location="map" />
      <h1 id="map-title">Find A Store</h1>
      <div id="map-area">
        <div className="search-area">
          {locations.map(e => <Store storeName={e.name} storeAddress={e.address}/>)}
        </div>
        <iframe
          className="google-map"
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ3xY3JCdjUjoRYRjM7iwVOXY&key=AIzaSyBTF6K9I4h2Vx7xPiC2q_hhsIHOcyRClPc"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
