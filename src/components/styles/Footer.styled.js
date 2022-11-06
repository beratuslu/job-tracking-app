import styled from "styled-components";

export const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #f2f2f2;
  color: white;
  max-width: 800px;
  width: 100%;
  height: 50px;
  left: 50%;
  padding-left: 20px;
  transform: translateX(-50%);

  .logo {
    margin-top: 3px;
    width: 150px;
  }
  .copyrights {
    position: absolute;
    right: 20px;
    top: 15px;
    color: #8e8d8d;
  }
`;
