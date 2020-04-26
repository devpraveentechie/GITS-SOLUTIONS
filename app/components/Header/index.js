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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faTimes,
  faChevronCircleDown,
  faChevronCircleUp,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import StyledHeader from './StyledHeader';
import { altText, logoLink } from './constant';
import GitsLogo from './gits-solution-logo.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      isActiveSearch: false,
    };
    this.handleNavToggle = this.handleNavToggle.bind(this);
    this.handleDropDownToggle = this.handleDropDownToggle.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleNavToggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  handleDropDownToggle = () => {
    this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
  };

  handleShow = e => {
    e.preventDefault();
    this.setState({
      isActiveSearch: true,
    });
  };

  handleHide = e => {
    e.preventDefault();
    this.setState({
      isActiveSearch: false,
    });
  };

  render() {
    const caret = this.state.dropdownOpen
      ? faChevronCircleUp
      : faChevronCircleDown;
    return (
      <StyledHeader>
        <Navbar color="faded" light toggleable="lg">
          <div className="d-flex logo-wrapper">
            <NavbarBrand tag={A} to={logoLink} className="logo">
              <Img fluid alt={altText} src={GitsLogo} />
              <span className="sub-title">GITS Solutions</span>
            </NavbarBrand>
            <A
              href="/"
              onClick={this.handleShow}
              className="search-link search-link-header"
            >
              <FontAwesomeIcon icon={faSearch} />
            </A>
            <NavbarToggler onClick={this.handleNavToggle} />
          </div>
          <Collapse navbar isOpen={this.state.isOpen}>
            <Nav navbar className="mr-auto">
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about-us">About Us</NavLink>
              </NavItem>
              <NavDropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.handleDropDownToggle}
              >
                <DropdownToggle nav className="dropdown-link">
                  <span className="dropdown-text">Courses</span>
                  <FontAwesomeIcon icon={caret} />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Category</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </NavDropdown>
              <NavItem>
                <NavLink href="/our-clients">Our Clients</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact-us">Contact Us</NavLink>
              </NavItem>
            </Nav>
            <Form inline className="form-nav">
              <A
                href="/"
                onClick={this.handleShow}
                className="search-link search-link-nav"
              >
                <FontAwesomeIcon icon={faSearch} />
              </A>
              {this.state.isActiveSearch ? (
                <div className="full-width-search">
                  <span className="search">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                  <Input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search in Gits Solutions"
                  />
                  <A className="close" href="/" onClick={this.handleHide}>
                    <FontAwesomeIcon icon={faTimes} />
                  </A>
                </div>
              ) : null}
            </Form>
            <A href="tel:919958186681" className="whatsapp-link">
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>+91-99581-86681</span>
            </A>
            <Button className="enquiry-button">Enquiry</Button>
          </Collapse>
        </Navbar>
      </StyledHeader>
    );
  }
}

Header.propTypes = {};

export default memo(Header);
