import React from "react";
import "./App.css";
import JobList from "./components/JobList";
import JobForm from "./components/JobForm";
import { hideApiModal } from "./redux/actions";
import {
  StyledWrapper,
  StyledDivider,
} from "./components/styles/Wrapper.styled";
import { InfoCircleOutlined } from "@ant-design/icons";
import { StyledFooter } from "./components/styles/Footer.styled";
import logo from "./assets/logo.png";
import { Col, Row, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getApiModalData } from "./redux/selectors";

function App() {
  const dispatch = useDispatch();
  const apiModalData = useSelector(getApiModalData);
  const handleModalCancel = () => {
    dispatch(hideApiModal());
  };

  return (
    <>
      <StyledWrapper>
        <div className="center">
          <Row>
            <Col span={24}>
              <img className="logo" src={logo} alt="logo" />
              <StyledDivider />
            </Col>
          </Row>

          <JobForm />
          <JobList />
        </div>
      </StyledWrapper>

      <StyledFooter>
        <img className="logo" src={logo} alt="logo" />
        <p className="copyrights">© Company</p>
      </StyledFooter>

      <Modal
        title={apiModalData.title}
        open={apiModalData.visible}
        onCancel={handleModalCancel}
        onOk={handleModalCancel}
        icon={<InfoCircleOutlined />}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>{apiModalData.content}</p>
      </Modal>
    </>
  );
}

export default App;
