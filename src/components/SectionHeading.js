import React from "react";

export default function SectionHeading ({ children }) {
  return (
    <h2 className="text-[#9a872a] text-3xl font-medium capitalize mb-8 text-center dark:text-[#c79e55]">
      {children}
    </h2>
  );
}