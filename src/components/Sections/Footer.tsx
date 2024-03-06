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
    <div className="m-auto flex w-11/12 items-center justify-between py-8 text-sm text-[#706f75]">
      <p>© {currentYear} Robério Filho. All rights reserved.</p>
      <div className="space-x-4">
        {linksData.map((data) => (
          <a
            key={data.href}
            href={data.href}
            target="_blank"
            className="underline transition-all hover:text-white/90"
          >
            {data.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
