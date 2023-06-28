import "./Error.css";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import { useRouteError } from "react-router-dom";
import sadPeanut from "../../assets/sad-peanut.png"

function ErrorElement() {
  const errorMessage = useRouteError();
  const listener = (): void => {
    window.alert("here's the error we received:\n\n" + errorMessage)
  }

  return (
    <div className="error-element">
      <Navbar location="error"/>
      <div className="content">
        <div>
          <h1>Sorry :(</h1>
          <h2>We couldn't process your request. </h2>
          <h2>Please try again.</h2>
          <div className="button-container">
            <Button buttonType="primary" destination="..">Home</Button>
            <Button buttonType="secondary" listener={listener}>View Error Message</Button>
          </div>
        </div>
        <img src={sadPeanut} alt="ashamed peanut" className=""/>
      </div>
    </div>
  );
}

export default ErrorElement;