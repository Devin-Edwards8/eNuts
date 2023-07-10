import Navbar from "../../components/Navbar/Navbar"
import Button from "../../components/Button/Button";
import "./About.css"
import trees from "../../assets/pistachio-trees.png"
import { useRef } from "react";

function About() {
  const dialog = useRef<HTMLDialogElement>(null);
  const openDialog = () => {
    dialog.current !== null ? dialog.current.showModal() : window.alert("An unexpected error has occurred.\nTry contacting us at our email: wehavenoemail@fakeemail.com");
  }
  const closeDialog = () => {
    dialog.current !== null ? dialog.current.close() : window.alert("An unexpected error has occurred.\nTry contacting us at our email: wehavenoemail@fakeemail.com");
  }

  return (
    <div>
      <Navbar location="about"/>
      <div className="about row">
        <img src={trees} alt="pistachio tree fields"/>
        <div className="story">
          <h1>Our Story</h1>
          {story}
          <div style={{display: "flex", gap: "1.5vw"}}>
            <Button buttonType="primary" textType="inverted-text-color">Shop</Button>
            <Button buttonType="secondary" textType="normal-text-color" listener={openDialog}>Contact Us</Button>
          </div>
          <dialog ref={dialog}>
            <h1>What's Up?</h1>
            <form>
              <input placeholder="Name *" type="text"/>
              <input placeholder="Email *" type="email"/>
              <textarea rows={4} cols={80} maxLength={320} placeholder="Message *">
                <input/>
              </textarea>
            </form>
            <div className="button-container">
              <Button buttonType="secondary" textType="normal-text-color" listener={closeDialog}>Cancel</Button>
              <Button buttonType="primary" textType="inverted-text-color" listener={closeDialog}>Send</Button>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}

export default About;

const story =
  <div>
    <p>From a humble beginning, <span className="emphasis">ENUTS</span> has grown into a prospering business. Delivering nuts from our fields straight to your doorstep, our promise is to blah blah blah...</p>
    <p>We are <span className="emphasis">not</span> a real business. However, the creator of this site is very real, and he wants to work with you! If you're interested, check out his <a href="https://devin-edwards.netlify.app/" target="_blank" rel="noreferrer">portfolio</a> and reach out!</p>
    <p>If you're interested in buying nuts, kirkland peanuts are my favorite. You could also try <a href="https://www.nutstop.com/wholesale/bulk-nuts-seeds" target="_blank" rel="noreferrer">Nutstop</a> or <a href="https://www.americannutcompany.com/shop" target="_blank" rel="noreferrer">American Nut Company</a> if you looking for real online nut stores. I hope you find what you're looking for!</p>
  </div>