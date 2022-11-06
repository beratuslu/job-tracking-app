import React from "react";
import { useDispatch } from "react-redux";
import { addJob } from "../redux/actions";
import { Col, Row, Input, Select, Typography, Form, Grid } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { StyledButton } from "../components/styles/JobForm.styled";
const { useBreakpoint } = Grid;
const { Title } = Typography;
const { Option } = Select;

const CreateJob = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const screens = useBreakpoint();

  const onFinish = ({ name, priority }) => {
    dispatch(addJob(name, priority));
    form.resetFields();
  };

  return (
    <div>
      <Form
        name="basic"
        onFinish={onFinish}
        labelCol={{ span: 24 }}
        autoComplete="off"
        form={form}
      >
        <Row>
          <Col span={24}>
            <Title level={5}>Create New Job</Title>
          </Col>
        </Row>

        <Row>
          <Col xs={24} sm={14}>
            <Form.Item
              label="Job Name"
              name="name"
              rules={[
                { required: true, message: "Please input your job name!" },
                {
                  pattern: /^[a-z\d\-_\s]+$/i,
                  message: "Should be alphanumeric!",
                },
              ]}
            >
              <Input placeholder="Job name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={5}>
            <Form.Item
              wrapperCol={{ span: 24 }}
              label="Priority"
              name="priority"
              rules={[{ required: true, message: "Please select priority!" }]}
            >
              <Select className="select-after" placeholder="Select">
                <Option value={3}>Urgent</Option>
                <Option value={2}>Regular</Option>
                <Option value={1}>Trivial</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={5}>
            <Form.Item
              wrapperCol={{ span: 24 }}
              name="submit"
              label={screens.xs ? "" : <span></span>}
            >
              <StyledButton
                icon={<PlusOutlined />}
                type="primary"
                htmlType="submit"
              >
                Create
              </StyledButton>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CreateJob;
