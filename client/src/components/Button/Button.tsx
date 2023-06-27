import './Button.css';

function Button(props: {children: string, buttonType: string}) {
  return (
    <div className={"button " + props.buttonType}>
      <p>{props.children}</p>
    </div>
  );
}

export default Button;