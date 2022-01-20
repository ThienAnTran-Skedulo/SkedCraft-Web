import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  NavbarToggler,
  NavbarText
} from "reactstrap";
import './NavBar.css'
import SkeduloLogo from '../../assets/img/SkedLogo.jpeg'

// core components

function SkedNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <>
      <div className="navbar-container">
        <Navbar
            className="navbar"
            color="light"
            expand="md"
            light
            bg-primary
        >
            {/* <NavbarBrand href="../../assets/img/SkedLogo.jpeg">
                Skedulo
            </NavbarBrand> */}
            <img className="navbar-logo" src={SkeduloLogo} alt="Skedulo" />
            <NavbarToggler onClick={function noRefCheck(){}} />
            <Collapse navbar>
                <Nav
                    className="me-auto"
                    navbar
                >
                    {/* Schedule */}
                    <UncontrolledDropdown
                        inNavbar
                        nav
                    >
                        <DropdownToggle
                            caret
                            nav
                        >
                            Schedule
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    {/* Work */}
                    <UncontrolledDropdown
                        inNavbar
                        nav
                    >
                        <DropdownToggle
                            caret
                            nav
                        >
                            Work
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <NavItem>
                        <NavLink href="/components/">
                            Activities
                        </NavLink>
                    </NavItem>

                    {/* Rescources */}
                    <UncontrolledDropdown
                        inNavbar
                        nav
                    >
                        <DropdownToggle
                            caret
                            nav
                        >
                            Rescources
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    {/* Manage */}
                    <UncontrolledDropdown
                        inNavbar
                        nav
                    >
                        <DropdownToggle
                            caret
                            nav
                        >
                            Manage
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    {/* More */}
                    <UncontrolledDropdown
                        inNavbar
                        nav
                    >
                        <DropdownToggle
                            caret
                            nav
                        >
                            More
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                </Nav>
            </Collapse>
        </Navbar>
    </div>
    </>
  );
}

export default SkedNavbar;
