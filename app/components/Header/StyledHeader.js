import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: #fff;
  border-bottom: 2px solid #4266aa;
  .logo-wrapper {
    align-items: flex-start;
    align-content: flex-start;
  }
  .logo {
    padding: 0;
    cursor: pointer;
  }
  .logo img {
    max-width: 60px;
  }
  .sub-title {
    color: #4266aa;
    font-size: 25px;
    text-transform: uppercase;
    font-weight: bold;
    margin-left: 10px;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #4266aa;
  }
  .text-primary.dropdown-link {
    color: #4266aa !important;
  }
  .dropdown-text {
    margin-right: 5px;
  }
  .form-nav {
    margin-right: 2%;
  }
  .search-link {
    backgroud-color: transparent;
    font-size: 30px;
  }
  .full-width-search {
    width: 100%;
    background: #f1f1f1fd;
    position: absolute;
    border-bottom: 2px solid #4266aa;
    width: 100%;
    float: left;
    left: 0;
    top: 74px;
  }
  .full-width-search input.form-control {
    width: 99%;
    border: none;
    border-radius: 0;
    font-size: 30px;
    padding: 10px 25px 10px 50px;
    background: none;
  }
  .close {
    cursor: pointer;
    position: absolute;
    font-size: 30px;
    right: 10px;
    top: 8px;
  }
  .search {
    position: absolute;
    font-size: 30px;
    left: 10px;
    top: 8px;
    font-weight: normal;
    color: #333333;
  }
  .whatsapp-link {
    font-size: 25px;
    padding: 5px 0 0 0;
  }
  .enquiry-button {
    margin-left: 2%;
    border-radius: 20px;
    background: none;
    color: #4266aa;
    border: 1px solid #4266aa;
  }
  @media only screen and (min-width: 800px) {
    .search-link-header {
      display: none;
    }
    .search-link-nav {
      display: block;
    }
  }
  @media only screen and (max-width: 800px) {
    .sub-title {
      font-size: 20px;
    }
    .logo img {
      max-width: 40px;
    }
    .search-link {
      font-size: 20px;
    }
    .full-width-search {
      top: 50px;
    }
    .search-link-header {
      display: block;
      margin-left: 12%;
    }
    .search-link-nav {
      display: none;
    }
    .navbar-toggler {
      margin-left: 5%;
      padding: 0;
    }
    .full-width-search input.form-control {
      font-size: 20px;
    }
    .full-width-search .search {
      font-size: 20px;
    }
    .close {
      font-size: 20px;
    }
  }
`;
export default StyledHeader;
