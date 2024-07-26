'use client'
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
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

export default function NavbarContainer() {
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
  return (
    <>
      {/* <div className="w-full bg-transparent-navbar absolute top-[35px] left-0"></div> */}
      <div className="w-full bg-transparent-navbar py-4 absolute top-[35px] left-0 ">
        <Navbar disableAnimation className="w-[74%] nav m-auto py-6 flex">
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle />
          </NavbarContent>

          <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
              <Logo />
              <p className="font-bold text-inherit"></p>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden  sm:flex w-[100%] gap-10">
            <NavbarBrand className="ml-[-215px] ">
              <Logo />
              <p className="font-bold text-inherit"></p>
            </NavbarBrand>

            <NavbarItem isActive>
              <Link href="/" aria-current="page" color="warning">
                <h3 className={`${langHeader} hover:text-[#199249]`}>
                  {translator("home")}
                </h3>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                <h3 className={`${langHeader} hover:text-[#199249]`}>
                  {translator("aboutus")}
                </h3>
              </Link>
            </NavbarItem>
            {/* Bussinnes unit */}
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    <h3 className={`${langHeader}`}>
                      {translator("business_unit")}
                    </h3>
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[240px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem className={`py-1`}>
                  <h3
                    className={`${langHeader} px-1 py-6 hover:text-[#199249]`}
                  >
                    {translator("unit_elh")}
                  </h3>
                </DropdownItem>
                <DropdownItem className={`py-1`}>
                  <h3
                    className={`${langHeader} px-1 py-6 hover:text-[#199249]`}
                  >
                    {translator("unit_resort")}
                  </h3>
                </DropdownItem>
                <DropdownItem className={`py-1`}>
                  <h3
                    className={`${langHeader} px-1 py-6 hover:text-[#199249]`}
                  >
                    {translator("unit_micro")}
                  </h3>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            {/* Media */}
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    <h3 className={`${langHeader} hover:text-[#199249]`}>
                      {translator("media")}
                    </h3>
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[240px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem className={`py-1`}>
                  <h3
                    className={`${langHeader} px-1 py-6 hover:text-[#199249]`}
                  >
                    {translator("new_news")}
                  </h3>
                </DropdownItem>

                <DropdownItem className={`py-1`}>
                  <h3
                    className={`${langHeader} px-1 py-6 hover:text-[#199249]`}
                  >
                    {translator("gallery")}
                  </h3>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <NavbarItem>
              <Link href="#" aria-current="page">
                <h3 className={`${langHeader}  hover:text-[#199249]`}>
                  {translator("carrer")}
                </h3>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" className={`${langHeader}`}>
                <h3 className={`${langHeader}  hover:text-[#199249]`}>
                  {translator("contactus")}
                </h3>
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
      </div>
    </>
  );
}





