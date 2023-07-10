import "./PromotionBar.css"
// import {useEffect} from "react"
// import {useState} from "react"

// interface PromotionContract {
//   currentPromo: Number,
//   textKey: Number
// }

function PromotionBar() {
  const promotions = ["50% off all non-peanut items!", "25% off pistachios"];

  return (
    <div className="promotion-bar">
      <p className="inverted-text-color">{"<"}</p>
      <p className="inverted-text-color">{promotions[0]}</p>
      <p className="inverted-text-color">{">"}</p>
    </div>
  );
}

export default PromotionBar;

// function CyclingPromos(props: {promotions: string[]}) {
//   const [currentPromo, setPromo] = useState(1);
//   const [textKey, setKey] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       let ind = currentPromo, key = textKey;
//       setPromo(++ind % 2);
//       setKey(++key);
//     }, 5000)

//     return () => clearInterval(interval);
//   });
//   return <p key={textKey} className="inverted-text-color">{promotions[currentPromo]}</p>
// }

// const staticPromos = (promotions: string[]): => {
//   return <p key={textKey} className="inverted-text-color">{promotions[currentPromo]}</p>
// }