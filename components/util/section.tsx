import React from "react";

export const Section = ({ children, color, className = "" }) => {
  const sectionColor = {
    default: "text-gray-800 bg-white",
    tint: "text-gray-900 bg-gray-100",
    primary: "text-white bg-primary",
  };
  return (
    <section
      className={`flex-1 relative transition duration-150 ease-out body-font overflow-hidden ${sectionColor[color || "default"]} ${className}`}
    >
      {children}
    </section>
  );
};
