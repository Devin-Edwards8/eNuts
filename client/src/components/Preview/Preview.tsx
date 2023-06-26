import './preview.css'

function Preview(props: {name: string, price: number}) {
  return ( 
    <div className="preview">
      <h1>{props.name}</h1>
      <p>{props.price}</p>
    </div>
  );
}

export default Preview;