import React from "react";
import { Link } from "react-router-dom";
export default function Button({ children, disable, to, type }) {
  const base = `inline-block rounded-full text-sm
  bg-yellow-400 tracking-wide 
  uppercase font-semibold text-stone-800
  hover:bg-yellow-300 transition-colors duration-300
  focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300
  focus:ring-offset-2 disabled:cursor-not-allowed`;

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary: "inline-block rounded-full tracking-wide border-2 border-stone-300 text-sm"
    + " uppercase font-semibold text-stone-400 px-4 py-2.5 md:px-6 md:py-3.5"
    + " hover:bg-stone-300 transition-colors duration-300 hover:text-stone-800"
    + " focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:text-stone-300"
    + " focus:ring-offset-2 disabled:cursor-not-allowed"
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <div disable={disable} className={styles[type]}>
      {children}
    </div>
  );
}
