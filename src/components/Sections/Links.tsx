import React from "react";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "../../app/globals.css";
import { githubLink, linkedInLink, zapLink } from "../../utils/links";

const Links = () => {
  const iconsStyle =
    " hover:scale-[110%] cursor-pointer transition-all hover:text-[#7100ff] ";

  return (
    <div className="fixed bottom-0 left-5 hidden flex-col items-center gap-4 lg:flex">
      <Link href={githubLink}>
        <Github size={24} className={iconsStyle} />
      </Link>
      <Link href={linkedInLink}>
        <Linkedin size={24} className={iconsStyle} />
      </Link>
      <Link href={zapLink}>
        <FaWhatsapp size={24} className={iconsStyle} />
      </Link>
      <span className="mt-2 h-[250px] w-[1px] bg-white"></span>
    </div>
  );
};

export default Links;
