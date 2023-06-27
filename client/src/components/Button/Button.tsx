import './Button.css';
import { Link } from 'react-router-dom';

function Button(props: {children: string, buttonType: string, destination: string}) {
  return (
    <Link to={props.destination} style={{textDecoration: 'none'}}>
      <div className={"button " + props.buttonType} >{props.children}</div>
    </Link>
  );
}

export default Button;