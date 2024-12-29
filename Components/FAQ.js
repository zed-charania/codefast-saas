"use client";
import { useState } from "react";

const FAQ = ({ qa }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li>
      <button
        className="py-5 font-semibold border-b w-full text-left flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{qa.question}</p>
        {isOpen ? "-" : "+"}
      </button>
      <div className={`${isOpen ? "block" : "hidden"} mt-3 mb-6 opacity-90`}>
        {" "}
        {qa.answer}
      </div>
    </li>
  );
};

export default FAQ;
