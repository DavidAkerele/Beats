import "./Footer.css";
import Logo from "../../assets/logo.svg";
import soci from "../../assets/social.svg";
const Footer = () => {
  return (
    <div className="footer-container">
      <img className="log" src={Logo} alt="" />
      <div className="krpt">
        <p className="heed">Products</p>
        <p>Headphones</p>
        <p>Earphones</p>
        <p>Earbuds</p>
        <p>Accessories</p>
      </div>
      <div className="krpt">
        <p className="heed">Support</p>
        <p>Product help</p>
        <p>Register</p>
        <p>Updates</p>
        <p>Provides</p>
      </div>
      <div className="newsletter">
        {/* <h2>Join Our Newsletter</h2> */}
        <form className="newsinp" action="">
          <input type="text" placeholder="Email Address" />
          <button className="footer-btn"> Submit </button>
        </form>
        <div className="newsimg">
          <img src={soci} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
