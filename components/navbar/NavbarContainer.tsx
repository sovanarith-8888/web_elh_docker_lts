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
import classes from "./navbar.module.css"
import FindProperties from "./FindProperties";
import classesF from "./find-properties.module.css";
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
      if (window.pageYOffset > 30) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      {/* <div className="w-full bg-transparent-navbar absolute top-[35px] left-0"> */}
       
        <Navbar disableAnimation className={`${isFixed ? "fixed" : 'absolute top-[35px] left-0' } w-[100%]  bg-transparent-navbar px-[13%]  h-[104px] m-auto flex justify-between items-center`}>

          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            <NavbarBrand className="p-1">
              <Logo />
              <p className="font-bold text-inherit"></p>
            </NavbarBrand>
          </NavbarContent>


          {/* <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent> 

        <NavbarContent className="sm:hidden mr-4" justify="center">
          <NavbarBrand>
            <Logo />
          </NavbarBrand>
        </NavbarContent> */}

          {/* have class hideen */}
          <NavbarContent className="hidden sm:flex mr-[-58px] justify-end items-center gap-[21px]" justify="center">
            {/* <div className="bg-black w-[220px]">
            <Logo />
          </div> */}

            <NavbarItem className="text-white">
              <Link href="/" aria-current="page">
                <h3 className={`${langHeader} hover:text-[#199249] text-white`}>
                  {translator("home")}
                </h3>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href={`/${locale}/about-us`}>
                <h3 className={`${langHeader} hover:text-[#199249] text-white`}>
                  {translator("aboutus")}
                </h3>
              </Link>
            </NavbarItem>
            {/* Bussinnes unit */}
            <Dropdown className={`${classes.NavbarItem}`} 
            isOpen={isHoverUnit}
            onMouseLeave={() => setIsHoverUnit(false)}
            >
              <NavbarItem className={`${classes.NavbarItem}`}>
                <DropdownTrigger className={`${classes.NavbarItem}` } 
                onMouseEnter={() => setIsHoverUnit(true)}
                >
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent mb-1"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    <h3 className={`${langHeader} hover:text-[#199249] text-white`}>
                      {translator("business_unit")}
                    </h3>
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className={`w-[240px] ${classes.DropdownMenu}`}
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem className={`py-1 ${classes.DropdownMenu}`}>
                  <Link href={`/${locale}/projects`}>
                    <h3
                      className={`${langHeader} px-1 py-6 hover:text-[#199249]`}
                    >
                      {translator("unit_elh")}
                    </h3>
                  </Link>
                </DropdownItem>
                <DropdownItem className={`py-1`}>
                  <Link href={`https://east-resort.com/`} target="_blank">
                    <h3
                      className={`${langHeader} px-1 py-6 hover:text-[#199249]`}
                    >

                      {translator("unit_resort")}


                    </h3>
                  </Link>
                </DropdownItem>
                <DropdownItem className={`py-1`}>
                  <Link href={`https://www.eastmicro.com.kh/`} target="_blank">
                    <h3
                      className={`${langHeader} px-1 py-6 hover:text-[#199249]`}
                    >
                      {translator("unit_micro")}

                    </h3>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            {/* Media */}
            {/* <Dropdown 
            isOpen={isHoverMedia}
            onMouseLeave={() => setIsHoverMeia(false)}>
              <NavbarItem>
                <DropdownTrigger className="menu-hover"
                onMouseEnter={() => setIsHoverMeia(true)}>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent  data-[hover=true]:bg-transparent menu-hover mb-1"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"

                  >
                    <h3 className={`${langHeader} hover:text-[#199249] text-white`}>
                      {translator("media")}
                    </h3>
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                id="dropdownHover"
                aria-label="ACME features"
                className="w-[240px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem className={`py-1`}>
                  <Link href={`/${locale}/web-underconstruction`}>
                    <h3
                      className={`${langHeader} px-1 py-6 hover:text-[#199249]`}
                    >
                      {translator("new_news")}
                    </h3>
                  </Link>
                </DropdownItem>

                <DropdownItem className={`py-1`}>
                  <Link href={`/${locale}/web-underconstruction`}>
                    <h3
                      className={`${langHeader} px-1 py-6 hover:text-[#199249]`}
                    >
                      {translator("gallery")}
                    </h3>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown> */}

            <NavbarItem>
              <Link href="https://www.facebook.com/bslandhomecareer" target="_blank" aria-current="page">
                <h3 className={`${langHeader}  hover:text-[#199249] text-white`}>
                  {translator("new")}
                </h3>
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link href="https://www.facebook.com/bslandhomecareer" target="_blank" aria-current="page">
                <h3 className={`${langHeader}  hover:text-[#199249] text-white`}>
                  {translator("carrer")}
                </h3>
              </Link>
            </NavbarItem>



            <NavbarItem>
              <Link href="https://www.facebook.com/bslandhomecareer" target="_blank" aria-current="page">
                <h3 className={`${langHeader}  hover:text-[#199249] text-white`}>
                  {translator("csr")}
                </h3>
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link
                color="foreground"
                href={`/${locale}/contact-us`}
                className={`${langHeader}`}
              >
                <h3 className={`${langHeader}  hover:text-[#199249] text-white`}>
                  {translator("contactus")}
                </h3>
              </Link>
            </NavbarItem>

            <NavbarItem>
 
             <Link href={`/${locale}/projects`}>
              <FindProperties/>
             </Link>
       
            </NavbarItem>


          </NavbarContent>


          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full"
                  color={
                    index === 2
                      ? "warning"
                      : index === menuItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
    </>
  );
}
