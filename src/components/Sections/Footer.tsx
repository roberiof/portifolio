import React from "react";
import { githubLink, linkedInLink, mediumLink, zapLink } from "@/utils/links";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const linksData = [
    {
      href: githubLink,
      label: "GitHub"
    },
    { href: mediumLink, label: "Medium" },
    { href: linkedInLink, label: "LinkedIn" },
    { href: zapLink, label: "WhatsApp" }
  ];

  return (
    <div
      className="m-auto flex w-11/12 flex-col items-center justify-between gap-y-4 py-8 text-sm text-[#706f75] sm:flex-row"
      id="footer"
    >
      <p>© {currentYear} Robério Filho. All rights reserved.</p>
      <div className="space-x-6">
        {linksData.map((data) => (
          <a
            key={data.href}
            href={data.href}
            target="_blank"
            className="text-lg underline transition-all hover:text-white/90"
          >
            {data.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
