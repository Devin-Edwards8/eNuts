import Navbar from "../../components/Navbar/Navbar"
import Button from "../../components/Button/Button";
import "./About.css"
import trees from "../../assets/pistachio-trees.png"

function About() {
  return (
    <div>
      <Navbar location="about"/>
      <div className="about row">
        <img src={trees} alt="pistachio tree fields"/>
        <div className="story">
          <h1>Our Story</h1>
          <p>{story}</p>
          <div style={{display: "flex", gap: "1.5vw"}}>
            <Button buttonType="primary" textType="inverted-text-color">Shop</Button>
            <Button buttonType="secondary" textType="normal-text-color">Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

const story = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare odio justo, quis pharetra libero auctor eu. Suspendisse feugiat finibus commodo. Phasellus magna purus, molestie vel diam auctor, tempus aliquet tortor. Integer feugiat egestas euismod. Fusce ut finibus sapien. Aenean dictum neque nec ornare ultrices. Aliquam eget felis ut nibh viverra posuere vitae sed nibh. Curabitur in suscipit sapien. Sed dui ex, ultricies vitae iaculis non, lobortis id elit. Ut blandit ipsum vitae tempor scelerisque. Donec sit amet accumsan sem. Morbi a vulputate purus. Nullam ultrices tempor magna at gravida. Nullam fringilla porta felis, scelerisque vehicula velit auctor vitae. Praesent elementum pretium nibh et consequat."