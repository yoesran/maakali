import { Link } from "react-router-dom";

import { appLogo } from "../assets/svgs";
import { navItems } from "../constants";

import NavigationItem from "./NavigationItem";

function Footer() {
  return (
    <footer className="mt-auto bg-grayBackground p-10 pb-5 flex flex-col gap-5">
      <nav className="border-gray-300 border-t-2 border-b-2 py-5">
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

      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <Link to="/">
          <img src={appLogo} alt="app logo" />
        </Link>

        <p className="text-tertiary text-xs md:text-base">
          © 2023 MA-A-KALI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
