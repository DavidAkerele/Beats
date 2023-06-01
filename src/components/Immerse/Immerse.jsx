import "./Immerse.css";

import bag from "../../assets/bag.svg";
import imm from "../../assets/imm.svg";

const Immerse = () => {
  return (
    <div className="immerse-container">
      <div className="immerse-left">
        <h3>Immerse yourself in your music</h3>
        <p>Buy Now, up to 40% off.</p>
        <button>
          <img src={bag} alt="" />
          Buy Now
        </button>
      </div>
      <img src={imm} alt="" />
    </div>
  );
};

export default Immerse;
