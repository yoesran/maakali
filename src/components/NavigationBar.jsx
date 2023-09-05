import { Link } from "react-router-dom";

import { appLogo } from "../assets/svgs";
import { navItems } from "../constants";

import NavigationItem from "./NavigationItem";

function NavigationBar() {
  return (
    <header className="w-full p-3 flex justify-between items-center shadow-md md:p-5">
      <Link to="/">
        <img src={appLogo} alt="app logo" />
      </Link>

      <nav>
        <ul className="list-none m-0 p-0 flex gap-2 md:gap-3 lg:gap-5">
          {navItems.map((item) => {
            return (
              <li key={item.id}>
                <NavigationItem to={item.to}>{item.text}</NavigationItem>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
