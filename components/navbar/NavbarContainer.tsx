"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
  DropdownItem,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { ChevronDown } from "./IconMenu";
import { Logo } from "./Logo";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { koulenHeader, vigaHeader } from "@/app/[locale]/(user)/fonts";
import classes from "./navbar.module.css";
import FindProperties from "./FindProperties";

export default function NavbarContainer() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isHoverUnit, setIsHoverUnit] = React.useState(false);
  const [isHoverMedia, setIsHoverMeia] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };
  const param = useParams();
  const locale = param.locale;
  const langHeader =
    locale === "kh" ? koulenHeader.className : vigaHeader.className;
  const translator = useTranslations("Navbar");

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //const headerHeight = document.querySelector(`.${styles.header}`).offsetHeight;
      if (window.pageYOffset > 35) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <div
        className={`${
          isFixed
            ? "fixed top-[0] left-0 bg-green-500 z-50"
            : "absolute mt[70px] lg:top-[35px] left-0"
        } px-2 lg:px-[13%]  bg-transparent-navbar navbar  h-[104px] z-50`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={1} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[20px] w-[20px] mr-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Diplay for small devidce */}
            <ul
              tabIndex={1}
              className="w-[240px] menu menu-lg dropdown-content  bg-transparent-navbar rounded-box z-[50] mt-16 py-4  p-2 shadow gap-6"
            >
            <Link href="/" aria-current="page">
              <h3 className={`${langHeader} hover:text-[#199249] text-white`}>
                {translator("home")}
              </h3>
            </Link>
            <Link color="foreground" href={`/${locale}/about-us`}>
              <h3 className={`${langHeader} hover:text-[#199249] text-white text-wrap`}>
                {translator("aboutus")}
              </h3>
            </Link>
            <li>
              <details>
                <summary>
                  <h3
                    className={`${langHeader} hover:text-[#199249] text-white`}
                  >
                    {translator("business_unit")}
                  </h3>
                </summary>
                {/* bg-transparent-navbar  */}
                <ul className="px-8 w-fit py-4 flex flex-col text-white rounded-lg">
                  <Link href={`/${locale}/projects`}>
                    <h3
                      className={`${langHeader} px-1 py-6 hover:text-[#199249] pr-6 text-white`}
                    >
                      {translator("unit_elh")}
                    </h3>
                  </Link>
                  <Link href={`https://east-resort.com/`} target="_blank">
                    <h3
                      className={`${langHeader} px-1 py-6 hover:text-[#199249] text-white`}
                    >
                      {translator("unit_resort")}
                    </h3>
                  </Link>
                  <Link href={`https://www.eastmicro.com.kh/`} target="_blank">
                    <h3
                      className={`${langHeader} px-1 py-6 hover:text-[#199249] text-white`}
                    >
                      {translator("unit_micro")}
                    </h3>
                  </Link>
                </ul>
              </details>
            </li>

            <Link
              href="https://www.facebook.com/bslandhomecareer"
              target="_blank"
              aria-current="page"
            >
              <h3 className={`${langHeader}  hover:text-[#199249] text-white`}>
                {translator("carrer")}
              </h3>
            </Link>
            <Link
              href={`/${locale}/news`}
              target="_blank"
              aria-current="page"
            >
              <h3 className={`${langHeader}  hover:text-[#199249] text-white`}>
                {translator("new")}
              </h3>
            </Link>
            <Link
              href={`/${locale}/csr`}
              target="_blank"
              aria-current="page"
            >
              <h3 className={`${langHeader}  hover:text-[#199249] text-white`}>
                {translator("csr")}
              </h3>
            </Link>

            <Link
              color="foreground"
              href={`/${locale}/contact-us`}
              className={`${langHeader}`}
            >
              <h3 className={`${langHeader}  hover:text-[#199249] text-white`}>
                {translator("contactus")}
              </h3>
            </Link>
          </ul>
            {/* => End Phone */}
          </div>

          <Logo/>
        </div>

        {/* Default */}
        <div className="navbar-center hidden lg:flex justify-center lg:mr-[70px]">
          <ul className="menu menu-horizontal px-1 gap-6">
            <Link href="/" aria-current="page">
              <h3 className={`${langHeader} hover:text-[#199249] text-white`}>
                {translator("home")}
              </h3>
            </Link>
            <Link color="foreground" href={`/${locale}/about-us`}>
              <h3 className={`${langHeader} hover:text-[#199249] text-white`}>
                {translator("aboutus")}
              </h3>
            </Link>
            <li>
              <details>
                <summary>
                  <h3
                    className={`${langHeader} hover:text-[#199249] text-white`}
                  >
                    {translator("business_unit")}
                  </h3>
                </summary>
                <ul className="px-8 w-fit py-4 bg-transparent-navbar flex flex-col">
                  <Link href={`/${locale}/projects`}>
                    <h3
                      className={`${langHeader} px-1 py-6 hover:text-[#199249] pr-6 text-white`}
                    >
                      {translator("unit_elh")}
                    </h3>
                  </Link>
                  <Link href={`https://east-resort.com/`} target="_blank">
                    <h3
                      className={`${langHeader} px-1 py-6 hover:text-[#199249] text-white`}
                    >
                      {translator("unit_resort")}
                    </h3>
                  </Link>
                  <Link href={`https://www.eastmicro.com.kh/`} target="_blank">
                    <h3
                      className={`${langHeader} px-1 py-6 hover:text-[#199249] text-white`}
                    >
                      {translator("unit_micro")}
                    </h3>
                  </Link>
                </ul>
              </details>
            </li>

            <Link
              href="https://www.facebook.com/bslandhomecareer"
              target="_blank"
              aria-current="page"
            >
              <h3 className={`${langHeader}  hover:text-[#199249] text-white`}>
                {translator("carrer")}
              </h3>
            </Link>
            <Link
              href={`/${locale}/news`}
              target=""
              aria-current="page"
            >
              <h3 className={`${langHeader}  hover:text-[#199249] text-white`}>
                {translator("new")}
              </h3>
            </Link>
            <Link
              href={`/${locale}/csr`}
              target=""
              aria-current="page"
            >
              <h3 className={`${langHeader}  hover:text-[#199249] text-white`}>
                {translator("csr")}
              </h3>
            </Link>
            <Link
              color="foreground"
              href={`/${locale}/contact-us`}
              className={`${langHeader}`}
            >
              <h3 className={`${langHeader}  hover:text-[#199249] text-white`}>
                {translator("contactus")}
              </h3>
            </Link>
          </ul>
        </div>

        <div className="navbar-end">
          <Link href={`/${locale}/projects`}>
            <FindProperties />
          </Link>
        </div>
      </div>
    </>
  );
}
