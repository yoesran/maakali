import { Link, useLocation } from "react-router-dom";

function NavigationItem({ to, children }) {
  const location = useLocation();

  let activeLinkClass = "text-primary";
  if (location.pathname === to) {
    activeLinkClass = "text-greenText";
  }

  return (
    <Link
      to={to}
      className={`flex items-center no-underline ${activeLinkClass} text-xs lg:text-base xl:text-lg`}
    >
      {children}
    </Link>
  );
}

export default NavigationItem;
