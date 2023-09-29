import PlantersPeanuts from "./assets/sample-products/peanuts.png";
import LemoncelloAlmonds from "./assets/sample-products/lemon_choc_almonds.webp";
import Pistachios from "./assets/sample-products/pistachios.webp";
import Beans from "./assets/sample-products/beans.webp";
import Cashews from "./assets/sample-products/spicy_dill.webp";

export default function getImage(name: string) {
  switch(name) {
  case "almonds":
    return LemoncelloAlmonds;
  case "cashews":
    return Cashews;
  case "pistachios":
    return Pistachios;
  case "legumes":
    return Beans;
  default:
    return PlantersPeanuts;
  }
}