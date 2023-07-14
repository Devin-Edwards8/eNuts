import Navbar from "../../components/Navbar/Navbar"
import Button from "../../components/Button/Button";
import "./About.css"
import trees from "../../assets/pistachio-trees.png"
import { useRef, useState } from "react";

function About() {
  const messageBox = useRef<HTMLDialogElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, showMessageSent] = useState(false);
  const openMessage = () => {
    messageBox.current !== null ? messageBox.current.showModal() : window.alert("An unexpected error has occurred.\nTry contacting us at our email: wehavenoemail@fakeemail.com");
  }
  const closeMessage = () => {
    messageBox.current?.close();
  }
  const submitMessage = async() => {
    // form.current?.submit();
    // form.current?.reset();
    messageBox.current?.close();
    showMessageSent(true);
    // TODO: add timeout id so that it can be cancelled when exited
    await new Promise(r => setTimeout(r, 4000))
      .then(() => showMessageSent(false))
      .catch(e => window.alert(e))
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
            <Button buttonType="primary" textType="inverted-text-color" destination="../shop">Shop</Button>
            <Button buttonType="secondary" textType="normal-text-color" listener={openMessage}>Contact Us</Button>
          </div>
          <dialog ref={messageBox}>
            <h1>What's Up?</h1>
            <form ref={form}>
              <input id="name" placeholder="Name *" type="text" />
              <input id="email" placeholder="Email *" type="email" />
              <textarea id="message" rows={4} cols={80} maxLength={320} placeholder="Message *"/>
            </form>
            <div className="button-container">
              <Button buttonType="secondary" textType="normal-text-color" listener={closeMessage}>Cancel</Button>
              <Button buttonType="primary" textType="inverted-text-color" asyncListener={submitMessage}>Send</Button>
            </div>
          </dialog>
        </div>
      </div>
      <div className={"message-sent" + (messageSent ? "" : " hidden")}>
        <p className="message-sent-text">message sent</p>
        <p className="close-message-sent" onClick={() => showMessageSent(false)}>x</p>
      </div>
    </div>
  );
}

export default About;

// interface TimeoutFunction {
//   (): number
// }

const story =
  <div>
    <p>From a humble beginning, <span className="emphasis">ENUTS</span> has grown into a prospering business. Delivering nuts from our fields straight to your doorstep, our promise is to blah blah blah...</p>
    <p>We are <span className="emphasis">not</span> a real business. However, the creator of this site is very real, and he wants to work with you! If you're interested, check out his <a className="story-link" href="https://devin-edwards.netlify.app/" target="_blank" rel="noreferrer">portfolio</a> and reach out!</p>
    <p>If you're interested in buying nuts, kirkland peanuts are my favorite. You could also try <a className="story-link" href="https://www.nutstop.com/wholesale/bulk-nuts-seeds" target="_blank" rel="noreferrer">Nutstop</a> or <a className="story-link" href="https://www.americannutcompany.com/shop" target="_blank" rel="noreferrer">American Nut Company</a> if you looking for real online nut stores. I hope you find what you're looking for!</p>
  </div>