import styled from "styled-components";
import { Divider } from "antd";

export const StyledWrapper = styled.div`
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;

  div.center {
    max-width: 800px;
    margin: 0 auto;

    .logo {
      width: 200px;
    }
  }
`;

export const StyledDivider = styled(Divider)`
  margin-top: 0;
`;
