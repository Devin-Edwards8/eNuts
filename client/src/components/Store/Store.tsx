import "./Store.css";

function Store(props: {storeName: string, storeAddress: string}) {
  return (  
    <div className="store-preview">
      <h1>{props.storeName}</h1>
      <p>{props.storeAddress}</p>
      <button>LAUNCH STORE PAGE</button>
      <div className="open-tag">
        <p>Open</p>
      </div>
    </div>
  );
}

export default Store;