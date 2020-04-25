import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: #fff;
  border-bottom: 2px solid #4266aa;
  .navbar {
    padding-bottom: 0;
  }
  .logo {
    padding: 0;
    cursor: pointer;
  }
  .logo img.my-2 {
    max-width: 80px;
    margin-bottom: 1rem !important;
    margin-top: 0 !important;
  }
  .sub-title {
    color: #4266aa;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    margin-left: 10px;
  }
`;
export default StyledHeader;
