/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import {
  A,
  Img,
  Form,
  Input,
  Button,
  Navbar,
  Container,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from '@bootstrap-styled/v4';
import StyledHeader from './StyledHeader';
import { altText, logoLink } from './constant';
import GitsLogo from './gits-solution-logo.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
    };
    this.navToggle = this.navToggle.bind(this);
    this.dropDownToggle = this.dropDownToggle.bind(this);
  }

  navToggle() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  dropDownToggle() {
    this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
  }

  render() {
    return (
      <StyledHeader>
        <Navbar color="faded" light toggleable="lg">
          <Container>
            <div className="d-flex justify-content-between">
              <NavbarBrand tag={A} to={logoLink}>
                <Img fluid alt={altText} src={GitsLogo} className="my-2 logo" />
              </NavbarBrand>
              <NavbarToggler onClick={this.navToggle} />
            </div>
            <Collapse navbar isOpen={this.state.isOpen}>
              <Nav navbar className="mr-auto">
                <NavItem>
                  <NavLink>Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>About Us</NavLink>
                </NavItem>
                <NavDropdown
                  isOpen={this.state.dropdownOpen}
                  toggle={this.dropDownToggle}
                >
                  <DropdownToggle nav caret>
                    Courses
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Category</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </NavDropdown>
                <NavItem>
                  <NavLink>Our Clients</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Contact Us</NavLink>
                </NavItem>
              </Nav>
              <Form inline className="my-2 my-lg-0">
                <Input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                />
                <Button href="/" color="success">
                  Search
                </Button>
              </Form>
            </Collapse>
          </Container>
        </Navbar>
      </StyledHeader>
    );
  }
}

Header.propTypes = {};

export default memo(Header);
