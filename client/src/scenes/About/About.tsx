import Navbar from "../../components/Navbar/Navbar"
import "./About.css"
import trees from "../../assets/pistachio-trees.png"

function About() {
  return (
    <div>
      <Navbar location="about"/>
      <div className="about">
        <div className="image">
          <img src={trees} alt="pistachio tree fields"/>
          {/* <p>Our Pistachio Tree Fields</p> */}
        </div>
        <div className="story">
          <h1>Our Story</h1>
          <p>oashfohsf</p>
        </div>
      </div>
    </div>
  );
}

export default About;