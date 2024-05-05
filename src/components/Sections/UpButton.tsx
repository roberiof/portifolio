import { ArrowUp } from "lucide-react";
import React, { useState } from "react";

const UpButton = () => {
  const [isOnTop, setIsOnTop] = useState(false);

  window.addEventListener("scroll", function () {
    if (window.scrollY === 0) {
      setIsOnTop(true);
    } else {
      setIsOnTop(false);
    }
  });

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }
      className={`fixed bottom-4 right-2 hidden rounded-md border-2 border-white p-2 text-white transition-all hover:scale-110 sm:block ${isOnTop ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"}`}
    >
      <ArrowUp />
    </button>
  );
};

export default UpButton;
