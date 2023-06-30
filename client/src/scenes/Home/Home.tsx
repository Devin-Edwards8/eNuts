import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import PromotionBar from "../../components/PromotionBar/PromotionBar";
import Button from "../../components/Button/Button";
import walnuts from "../../assets/walnuts.png"

function Home() {
  return (
    <div>
      <Navbar location='home'/>
      <div className="homepage">
        <div className="text">
          <h1>Delicious <span className="emphasis">Nuts</span> <br/>Excellent Service</h1>
          <p>Check out one of our locations or take advantage of our delivery services!</p>
          <div className="button-container">
            <Button buttonType='primary' textType="inverted-text-color" destination='shop'>Shop</Button>
            <Button buttonType='secondary' textType="normal-text-color" destination='about'>About Us</Button>
          </div>
        </div>
        <img src={walnuts} alt="walnuts" />
      </div>
      <PromotionBar />
    </div>
  );
}

export default Home;