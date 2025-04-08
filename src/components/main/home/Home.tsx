

import Accuracy from "./Accuracy";
import Efficiency from "./Efficiency";
import Hero from "./Hero";
import Reporting from "./Reporting";
import Simplify from "./Simplify";

export default function Home() {
  return (
    <div className="bg-whiteAltPrimary">
      <Hero />
      <Efficiency />
      <Accuracy />
      <Reporting />
      <Simplify />
    </div>
  );
}
