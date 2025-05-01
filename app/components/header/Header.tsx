"use client";
import { useRef, useState } from "react";
import { FiBell } from "react-icons/fi";
import { IoMdAirplane } from "react-icons/io";
import { MdCall, MdHome } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { SlMenu } from "react-icons/sl";
import { useClickOutside } from "@/app/hooks/useClickOutSide";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const ref = useRef(null);

  useClickOutside(ref, () => {
    setOpenMenu(false);
  });

  return (
    <div className="relative">
      <header className="border-b container mx-auto px-8 border-[#10411B] ">
        <div className="flex justify-between items-center py-3">
          <SlMenu
            className="w-7 h-6 cursor-pointer"
            onClick={() => setOpenMenu(true)}
          />
          <RxExit className="h-10 w-10" color="green" />
        </div>
      </header>
      {/* Sidebar */}
      <div
        ref={ref}
        className={`fixed bg-white top-0  transform transition ease-in-out duration-200 right-0 py-8 px-3  w-1/2 z-40 h-full rounded-tl-xl ${
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
      {/* backdrop */}
      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className="backdrop-blur-sm bg-black/20 opacity-100 transition-all ease-in-out duration-200 w-full h-full fixed inset-0 z-30"
        ></div>
      )}
    </div>
  );
};

export default Header;
