import "./Style.css";
import bag from "../../assets/bag.svg";
import black from "../../assets/black.svg";
import red from "../../assets/red.svg";
import gold from "../../assets/gold.svg";
import blue from "../../assets/blue.svg";
import gray from "../../assets/gray.svg";
const Style = () => {
  return (
    <div className="style-container">
      <h1>Choose Your Style</h1>
      <div className="array">
        <div className="card">
          <div className="cardimg">
            <img className="headset" src={black} alt="" />
          </div>
          <div className="inner">
            <div className="array-bottom">
              <div className="abl">
                <h3>Black</h3>
                <p>N299K</p>
              </div>
              <button className="hey">
                <img src={bag} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="cardimg">
            <img className="headset" src={red} alt="" />
          </div>
          <div className="inner">
            <div className="array-bottom">
              <div className="abl">
                <h3>Black Red</h3>
                <p>N299K</p>
              </div>
              <button className="hey">
                <img src={bag} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="cardimg">
            <img className="headset" src={gold} alt="" />
          </div>
          <div className="inner">
            <div className="array-bottom">
              <div className="abl">
                <h3>Night Black</h3>
                <p>N299K</p>
              </div>
              <button className="hey">
                <img src={bag} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="cardimg">
            <img className="headset" src={blue} alt="" />
          </div>
          <div className="inner">
            <div className="array-bottom">
              <div className="abl">
                <h3>Blue</h3>
                <p>N299K</p>
              </div>
              <button className="hey">
                <img src={bag} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="cardimg">
            <img className="headset" src={gray} alt="" />
          </div>
          <div className="inner">
            <div className="array-bottom">
              <div className="abl">
                <h3>Gray</h3>
                <p>N299K</p>
              </div>
              <button className="hey">
                <img src={bag} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Style;
