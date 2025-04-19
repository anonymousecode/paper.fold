import { useState } from "react";
import "../styles/style.css";

function Fold() {
  const [thickness, setFold] = useState(0.1);
  const [count, setCount] = useState(0);

  const foldPaper = () => {
    setFold(thickness * 2);
    setCount(count + 1);
  };

  const unfoldPaper = () => {
    setFold(thickness / 2);
    setCount(count - 1);
  };

  const unit = () => {
    if (thickness >= 1000000) {
      return `${(thickness / 1000000).toFixed(4)} km`;
    } else if (thickness >= 1000) {
      return `${(thickness / 1000).toFixed(2)} m`;
    } else if (thickness >= 10) {
      return `${(thickness / 10).toFixed(2)} cm`;
    } else {
      return `${thickness.toFixed(2)} mm`;
    }
  };

  function getRealLifeEquivalent(mm) {
    if (mm <= 0.1) {
      return { label: "Average sheet of paper", image: "/images/paper.jpg" };
    } else if (mm <= 0.2) {
      return { label: "A strand of human hair.", image: "/images/hair.jpg" };
    } else if (mm <= 0.4) {
      return { label: "2 sheets of paper", image: "/images/two-papers.jpg" };
    } else if (mm <= 0.8) {
      return { label: "Credit card thickness", image: "/images/credit-card.jpg" };
    } else if (mm <= 1.6) {
      return { label: "A thick paperclip wire", image: "/images/paper-clip.webp" };
    } else if (mm <= 3.2) {
      return { label: "Stack of 16 business cards", image: "/images/business-cards.avif" };
    } else if (mm <= 6.4) {
      return { label: "Pencil lead casing", image: "/images/pencil.jpg" };
    } else if (mm <= 12.8) {
      return { label: "AA battery diameter", image: "/images/battery.webp" };
    } else if (mm <= 25.6) {
      return { label: "Golf ball diameter", image: "/images/golf-ball.jpg" };
    } else if (mm <= 51.2) {
      return { label: "Tennis ball diameter", image: "/images/tennis-ball.avif" };
    } else if (mm <= 102.4) {
      return { label: "iPhone length", image: "/images/iphone.png" };
    } else if (mm <= 204.8) {
      return { label: "Soda can height", image: "/images/soda-can.webp" };
    } else if (mm <= 409.6) {
      return { label: "Skateboard length", image: "/images/skateboard.jpeg" };
    } else if (mm <= 819.2) {
      return { label: "Baseball bat length", image: "/images/baseball-bat.jpg" };
    } else if (mm <= 1638.4) {
      return { label: "Human height (~5'4\")", image: "/images/human.webp" };
    } else if (mm <= 3276.8) {
      return { label: "Giraffe height", image: "/images/giraffe.jpg" };
    } else if (mm <= 6553.6) {
      return { label: "School bus length", image: "/images/school-bus.jpg" };
    } else if (mm <= 13107.2) {
      return { label: "Semi truck + trailer length", image: "/images/semi-truck.jpg" };
    } else if (mm <= 26214.4) {
      return { label: "Boeing 737 wingspan", image: "/images/boeing.webp" };
    } else if (mm <= 52428.8) {
      return { label: "Eiffel Tower height", image: "/images/eiffel-tower.webp" };
    } else if (mm <= 104857.6) {
      return { label: "Mount Fuji height", image: "/images/fuji.webp" };
    } else if (mm <= 209715.2) {
      return { label: "Commercial jet altitude", image: "/images/jet.jpg" };
    } else if (mm <= 419430.4) {
      return { label: "Edge of stratosphere", image: "/images/stratosphere.webp" };
    } else if (mm <= 838860.8) {
      return { label: "Space shuttle altitude during launch", image: "/images/shuttle.jpg" };
    } else if (mm <= 1677721.6) {
      return { label: "Low Earth Orbit starts", image: "/images/leo.jpg" };
    } else if (mm <= 3355443.2) {
      return { label: "ISS orbit altitude", image: "/images/iss.jpg" };
    } else if (mm <= 6710886.4) {
      return { label: "Satellite orbit (LEO to MEO)", image: "/images/satellite.jpg" };
    } else if (mm <= 13421772.8) {
      return { label: "GPS satellite orbit (MEO)", image: "/images/gps.jpg" };
    } else if (mm <= 26843545.6) {
      return { label: "Entire Earth diameter", image: "/images/earth.avif" };
    } else if (mm <= 53687091.2) {
      return { label: "One-tenth Earth’s circumference", image: "/images/earth-segment.jpg" };
    } else if (mm <= 107374182.4) {
      return { label: "Earth’s equator to pole (quarter)", image: "/images/earth-quarter.webp" };
    } else if (mm <= 214748364.8) {
      return { label: "Half of Earth’s circumference", image: "/images/earth-half.webp" };
    } else if (mm <= 429496729.6) {
      return { label: "Earth’s circumference", image: "/images/earth-circumference.webp" };
    } else if (mm <= 858993459.2) {
      return { label: "Distance to the Moon", image: "/images/moon.jpg" };
    } else if (mm <= 1717986918.4) {
      return { label: "2x Moon distance", image: "/images/moon-2x.jpg" };
    } else if (mm <= 3435973836.8) {
      return { label: "Mars closest approach to Earth", image: "/images/mars.jpg" };
    } else if (mm <= 6871947673.6) {
      return { label: "Distance to asteroid belt", image: "/images/asteroid-belt.webp" };
    } else if (mm <= 13743895347.2) {
      return { label: "Distance to Jupiter", image: "/images/jupiter.avif" };
    } else if (mm <= 27487790694.4) {
      return { label: "Saturn's orbit range", image: "/images/saturn.jpg" };
    } else if (mm <= 54975581388.8) {
      return { label: "Uranus orbit", image: "/images/uranus.jpg" };
    } else if (mm <= 109951162777.6) {
      return { label: "Neptune orbit", image: "/images/neptune.jpg" };
    } else if (mm <= 219902325555.2) {
      return { label: "Pluto's average distance from Sun", image: "/images/pluto.webp" };
    } else {
      return { label: "Edge of Solar System (Heliopause)", image: "/images/heliopause.webp" };
    }
  }
  
  const equivalent = getRealLifeEquivalent(thickness);

  return (
    <>
      <h1>Folded {count} times</h1>
      <h2>Current thickness of the paper is {unit(thickness)}</h2>
      <h3>{equivalent.label}</h3>
      <img
        src={equivalent.image}
        alt={equivalent.label}
        className="reference-image"
      />
      <div className="button-group">
        {count > 0 && (
          <button className="unfold-btn" onClick={unfoldPaper}>
            Unfold
          </button>
        )}
        {count < 42 && (
          <button className="fold-btn" onClick={foldPaper}>
            Fold
          </button>
        )}
      </div>
      
      {/* Portfolio button */}
      {/* <a href="https://your-portfolio-url.com" target="_blank" rel="noopener noreferrer">
        <button className="portfolio-btn">yn_k</button>
      </a> */}
    </>
  );
}

export default Fold;
