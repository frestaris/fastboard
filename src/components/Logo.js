import logo from "../assets/flash.png";
import "./Logo.css";
function Logo() {
  return (
    <div className="nav-left">
      <img src={logo} alt="Logo" className="logo" />
      <span className="logo-text">Q.board</span>
    </div>
  );
}

export default Logo;
