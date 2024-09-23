
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
    AvatarImage
  } from 'keep-react'
  
  export const Navbar1 = ({profile="/src/images/Profile.jpeg",logo='/src/images/Html.png'}) => {
    return (
      <Navbar className='px-5 bg-gradient-to-t from-black to-gray-600'>
        <NavbarContainer>
          <NavbarBrand>
            <img src={logo} alt="keep" className='w-[50px] h-[50px]' />
          </NavbarBrand>
          <NavbarList>
            <NavbarItem className=' text-white font-semibold'>Home</NavbarItem>
            <NavbarItem className=' text-white font-semibold'>Skills</NavbarItem>
            <NavbarItem className=' text-white font-semibold'>Projects</NavbarItem>
            <NavbarItem className=' text-white font-semibold'>Research</NavbarItem>
            <NavbarItem className=' text-white font-semibold'>Services</NavbarItem>
            <NavbarItem className=' text-white font-semibold'>Contact</NavbarItem>
          </NavbarList>
          <NavbarList>
            <Dropdown placement="bottom-end">
              <DropdownAction asChild>
                <Avatar>
                  <AvatarImage src={profile}  />
                </Avatar>
              </DropdownAction>
              <DropdownContent className='border border-metal-100'>
                <DropdownList>
                  <DropdownItem>Statistics</DropdownItem>
                  <DropdownItem>Duplicate</DropdownItem>
                  <DropdownItem>Account</DropdownItem>
                  <DropdownItem>Logout</DropdownItem>
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          </NavbarList>
          <NavbarCollapseBtn />
          <NavbarCollapse>
            <NavbarItem>Projects</NavbarItem>
            <NavbarItem>Research</NavbarItem>
            <NavbarItem>Contact</NavbarItem>
            <NavbarItem>Sign In</NavbarItem>
            <NavbarItem active={true}>Sign Up</NavbarItem>
          </NavbarCollapse>
        </NavbarContainer>
      </Navbar>
    )
  }
  
  