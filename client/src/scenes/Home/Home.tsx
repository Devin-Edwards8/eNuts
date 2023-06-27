import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import PromotionBar from '../../components/PromotionBar/PromotionBar';
import walnuts from '../../assets/walnuts.png'

function Home() {
  return (
    <div className="homepage">
      <Navbar />
      <div className="content">
        <div className="text">
          <h1>Delicious Nuts <br/>Excellent Service</h1>
          <p>Check out one of our locations or take advantage of our delivery services!</p>
        </div>
        <img src={walnuts} alt="walnuts" />
      </div>
      <PromotionBar />
    </div>
  );
}

export default Home;