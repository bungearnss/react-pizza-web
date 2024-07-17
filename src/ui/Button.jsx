import React from "react";
import { Link } from "react-router-dom";
export default function Button({ children, disable, to }) {
  const className = `inline-block rounded-full 
  py-3 px-4 bg-yellow-400 tracking-wide 
  uppercase font-semibold text-stone-800
hover:bg-yellow-300 transition-colors duration-300
  focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300
  focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4`;
  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <div disable={disable} className={className}>
      {children}
    </div>
  );
}
