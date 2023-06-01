import "./Specs.css";
import specs from "../../assets/specs.svg";
import blue from "../../assets/bluetooth.svg";
import batt from "../../assets/battery.svg";
import load from "../../assets/load.svg";
import mic from "../../assets/mic.svg";

const Specs = () => {
  return (
    <div className="specs-container">
      <h1>Specs</h1>
      <div className="specs-down">
        <div className="specs-left">
          <ul>
            <li>
              <img src={blue} alt="" />
              <h3>Connection</h3>
              <p>Bluetooth v5.2</p>
            </li>
            <li>
              <img src={batt} alt="" />
              <h3>Battery</h3>
              <p>Duration 40h</p>
            </li>
            <li>
              <img src={load} alt="" />
              <h3>Load</h3>
              <p>Fast charge 4.2-AAC</p>
            </li>
            <li>
              <img src={mic} alt="" />
              <h3>Microphone</h3>
              <p>Supports Apple, Siri and Google</p>
            </li>
          </ul>
        </div>
        <img src={specs} alt="" />
      </div>
    </div>
  );
};

export default Specs;
