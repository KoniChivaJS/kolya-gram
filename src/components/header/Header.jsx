import "./Header.scss";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="left-side">
          <img src="./img/logo.png" alt="logo" width={50} height={50} />
          <Link to={"/"}>
            <h2>KolyaGram</h2>
          </Link>
        </div>
        <div className="right-side">
          <Link to={"/about-us"}>
            <img src="./img/info.png" alt="info" width={30} height={30} />{" "}
          </Link>
          <Link to={"/contact-us"}>
            <img src="./img/mail.png" alt="account" width={30} height={30} />
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
