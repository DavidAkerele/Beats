import "./Navbar.css";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <img className="log" src={Logo} alt="" />

        <div className="right">
          <ul>
            <li className="home">Home</li>
            <li>Specs</li>
            <li>Case</li>
            <li>Products</li>
          </ul>
        </div>
      </div>
      <div className="navbar-btn">
        <button>Shop</button>
      </div>
    </div>
  );
};

export default Navbar;
