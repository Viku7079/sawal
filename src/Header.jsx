import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <NavLink to="/" className="logo"><img src="assets/images/logo.png" alt="logo" /></NavLink>
        
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/images">Images</NavLink>
          </li>
          <li>
            <NavLink to="/videos">Videos</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </header>
      
    </>
  );
};
export default Header;
