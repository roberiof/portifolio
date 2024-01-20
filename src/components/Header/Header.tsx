import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

import "./style.css";

export const Header = () => {
  const navLinksStyle =
    " p-2 px-4 font-medium text-white/70 hover:text-white transition-all duration-500 ";
  return (
    <header className="glassmorphism fixed left-1/2 top-5 z-10 flex w-[550px] -translate-x-1/2 justify-between border border-white/10 px-4 py-2 text-white">
      <div className="group flex items-center gap-2 transition-all">
        <div className="relative h-10 w-10  rounded-full">
          <Image
            src="/profile.png"
            fill
            alt="Foto de Robério Filho"
            className="cursor-pointer rounded-full object-cover"
          />
        </div>
        <div className="flex-col text-base">
          <span className="font-semibold">Robério Filho</span>
          <span className="hidden text-xs text-white/50 group-hover:flex">
            Frontend Engineer
          </span>
        </div>
      </div>
      <nav className="group relative flex">
        <a href="" className={"peer/work" + navLinksStyle}>
          Work
        </a>
        <a href="" className={"peer/about " + navLinksStyle}>
          About
        </a>
        <a
          href=""
          className={"peer/blog flex items-center gap-2 " + navLinksStyle}
        >
          <span>Blog</span>
          <span>
            <FaExternalLinkAlt size={14} />
          </span>
        </a>
        <span className="absolute top-0 -z-10 hidden h-full w-[70px] rounded-md border border-white/10 bg-white/10 transition-all group-hover:flex peer-hover/about:left-[73px] peer-hover/blog:left-[148px] peer-hover/work:left-0 peer-hover/blog:w-[80px]"></span>
      </nav>
    </header>
  );
};
