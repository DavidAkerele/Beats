import "./Case.css";
import casee from "../../assets/case.svg";
import caution from "../../assets/caution.svg";

const Case = () => {
  return (
    <div className="case-container">
      <h1>Case</h1>
      <div className="case-down">
        <img src={casee} alt="" />
        <div className="case-right">
          <p>
            With a comfortable and adaptable case so that you can store it
            whenever you want, and keep your durability forever.
          </p>
          <button>
            <img src={caution} alt="" /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Case;
