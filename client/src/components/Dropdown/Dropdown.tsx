import "./Dropdown.css"
import { useState } from "react";

function Dropdown(props: {title: string, options: string[]}) {
  const [revealed, reveal] = useState(false)
  const handleReveal = () => {
    revealed ? reveal(false) : reveal(true)
  }
  const arrowStyle = {
    fontSize: ".7rem",
    margin: 0,
    padding: 0
  }

  return (
    <div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", cursor: "pointer"}} 
        onClick={() => handleReveal()}>
        <h1 style={{margin: ".5rem 0 .5rem 0", fontSize: "1.1rem"}}>{props.title}</h1>
        {revealed ? <p style={arrowStyle}>▼</p> : <p style={arrowStyle}>▲</p>}
      </div>
      {revealed ? props.options.map((option, i) => 
        <div key={i} style={{position: "relative", height: "1.3rem", margin: "0 0 .3rem 3%"}}>
          <label className="dropdown">
            <input type="checkbox" id={"title-check-" + String(i)} value={option} name={option} />
            {option}
            <span className="check" />
          </label>
        </div>
      ): <></>}
    </div>
  );
}

export default Dropdown;