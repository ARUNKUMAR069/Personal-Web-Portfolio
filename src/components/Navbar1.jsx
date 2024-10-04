import {
  Avatar,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownList,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
  AvatarImage,
} from "keep-react";
import profile from "../images/Profile.jpeg";
import logo from "../images/Html.png";
export const Navbar1 = () => {
  return (
    <Navbar className="px-5 bg-gradient-to-t from-black to-gray-600">
      <NavbarContainer>
        <NavbarBrand>
          <img src={logo} alt="keep" className="w-[50px] h-[50px]" />
        </NavbarBrand>
        <NavbarList>
          <NavbarItem className=" text-white font-semibold">Home</NavbarItem>
          <NavbarItem className=" text-white font-semibold">Skills</NavbarItem>
          <NavbarItem className=" text-white font-semibold">
            Projects
          </NavbarItem>
          <NavbarItem className=" text-white font-semibold">
            Services
          </NavbarItem>
          <NavbarItem className=" text-white font-semibold">About</NavbarItem>
          <NavbarItem className=" text-white font-semibold">Contact</NavbarItem>
        </NavbarList>
        <NavbarList>
          <Dropdown placement="bottom-end">
            <DropdownAction asChild>
              <Avatar>
                <AvatarImage src={profile} />
              </Avatar>
            </DropdownAction>
            <DropdownContent className="border border-metal-100">
              <DropdownList>
                <DropdownItem className=" text-white font-semibold">
                  Home
                </DropdownItem>
                <DropdownItem className=" text-white font-semibold">
                  Skills
                </DropdownItem>
                <DropdownItem className=" text-white font-semibold">
                  Projects
                </DropdownItem>
                <DropdownItem className=" text-white font-semibold">
                  Services
                </DropdownItem>
                <DropdownItem className=" text-white font-semibold">
                  About
                </DropdownItem>
                <DropdownItem className=" text-white font-semibold">
                  Contact
                </DropdownItem>
              </DropdownList>
            </DropdownContent>
          </Dropdown>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>Skills</NavbarItem>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Services</NavbarItem>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};
