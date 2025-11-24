import { Link } from "react-router-dom";
import logo from "../../assets/icons/testlogo.svg";
import User from "./User";

const Navigation = () => {
  return (
    <header className="flex items-center justify-between py-3">
      <Link to="/">
        <img src={logo} alt="Tech care logo" height={150} width={150} />
      </Link>
      <User />
    </header>
  );
};

export default Navigation;
