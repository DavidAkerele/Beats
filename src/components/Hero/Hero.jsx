import "./Hero.css";
import hero from "../../assets/heroset.svg";
import bag from "../../assets/bag.svg";
const Hero = () => {
  return (
    <div className="hero-container">
      <img src={hero} alt="" />

      <div className="hero-right">
        <h1>On Ear</h1>
        <h2>Beats 3</h2>
        <h3>Overview</h3>
        <p>
          Enjoy award-winning Beats sound with wireless listening freedom and a
          sleek, streamlined design with comfortable padded earphones,
          delivering first-rate playback.
        </p>
        <button>
          {" "}
          <img src={bag} alt="" /> Add to bag{" "}
          <span className="nair">N399K</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
