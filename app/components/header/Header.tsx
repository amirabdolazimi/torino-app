"use client";
import { Fragment, useRef, useState } from "react";
import { FiBell } from "react-icons/fi";
import { IoMdAirplane } from "react-icons/io";
import { MdCall, MdHome } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { SlMenu } from "react-icons/sl";
import { useClickOutside } from "@/app/hooks/useClickOutSide";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const pathName = usePathname();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const sidebarRef = useRef(null);

  useClickOutside(sidebarRef, () => {
    setOpenMenu(false);
  });

  return (
    <div className="shadow">
      <Fragment>
        <header className="lg:hidden container mx-auto sticky px-8 ">
          <div className="flex justify-between relative items-center py-3">
            <SlMenu
              className="w-7 h-6 cursor-pointer"
              onClick={() => setOpenMenu(true)}
            />
            <RxExit className="h-10 w-10" color="green" />
          </div>
          {/* SideBar */}
          <Sidebar ref={sidebarRef} openMenu={openMenu} pathName={pathName} />
          {/* BackDrop */}
          {openMenu && (
            <div
              onClick={() => setOpenMenu(false)}
              className="backdrop-blur-sm lg:hidden bg-black/20 opacity-100 transition-all ease-in-out duration-200 w-full h-full fixed inset-0 z-30"
            ></div>
          )}
        </header>
        {/* Hero Section */}
        <div className="w-full relative -z-10 min-h-[120px] lg:min-h-[350px]">
          <Image
            alt="Torino Hero Section Banner"
            src="/images/header-banner.png"
            fill
            className="z-0"
          />
        </div>
      </Fragment>

      {/* Desktop Menu */}
      <Fragment></Fragment>
    </div>
  );
};

export default Header;

interface ISidebar {
  ref: React.RefObject<HTMLDivElement | null>;
  openMenu: boolean;
  pathName: string;
}
const Sidebar: React.FC<ISidebar> = ({ ref, openMenu, pathName }) => {
  return (
    <div
      ref={ref}
      className={`lg:hidden fixed bg-white top-0 transform h-full transition ease-in-out duration-200 right-0 py-8 px-3 w-1/2 z-40 rounded-tl-xl ${
        !openMenu && "translate-x-full"
      }`}
    >
      <nav>
        <ul className="flex flex-col gap-5 ">
          <li>
            <Link
              href="/"
              className={`text-xl flex justify-start items-center ${
                pathName == "/" ? "text-primary" : ""
              }`}
            >
              <MdHome />
              <span className="mr-2">صفحه اصلی</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`text-xl flex justify-start items-center ${
                pathName == "#" ? "text-primary" : ""
              }`}
            >
              <IoMdAirplane />
              <span className="mr-2">خدمات گردشگری</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`text-xl flex justify-start items-center ${
                pathName == "#" ? "text-primary" : ""
              }`}
            >
              <FiBell />
              <span className="mr-2">درباره ما</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`text-xl flex justify-start items-center ${
                pathName == "#" ? "text-primary" : ""
              }`}
            >
              <MdCall />
              <span className="mr-2">تماس با ما</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
