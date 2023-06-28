import "./Button.css";
import { Link } from "react-router-dom";

interface Listener {
  (): void
}

function Button(props: {children: string, buttonType: string, destination?: string, listener?: Listener}) {
  if(props.listener) {
    const listener = props.listener ?? function() {return}
    return <div className={"button " + props.buttonType} onClick={() => listener()}>{props.children}</div>
  }
  if(props.destination) {
    const destination = props.destination ?? "";
    return (
      <Link to={destination} style={{textDecoration: "none"}}>
        <div className={"button " + props.buttonType} >{props.children}</div>
      </Link>
    );
  }
  return <></>
}

export default Button;