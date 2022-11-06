import styled from "styled-components";
import { Select } from "antd";

export const FilterWrapper = styled.div`
  background-color: #f2f2f2;
  padding: 20px;

  div.center {
    max-width: 800px;
    margin: 0 auto;

    .logo {
      width: 200px;
    }
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  p.count {
    color: gray;
    font-size: 14px;
  }
`;

export const StyledSelect = styled(Select)`
  width: 100%;
`;
