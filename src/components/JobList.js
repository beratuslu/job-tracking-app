import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  FilterWrapper,
  StyledSelect,
  TitleWrapper,
} from "../components/styles/JobList.styled";

import {
  deleteJob,
  updateJob,
  setPriorityFilter,
  setNameFilter,
} from "../redux/actions";
import { getFilteredJobs, getAllJobs } from "../redux/selectors";
import { useSelector } from "react-redux";
import {
  Col,
  Row,
  Typography,
  Button,
  Space,
  Modal,
  Tag,
  Input,
  Select,
  Table,
} from "antd";

const { Option } = Select;
const { confirm } = Modal;
const { Title } = Typography;

function JobList() {
  const dispatch = useDispatch();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({});
  const [cachePriority, setCachePriority] = useState(null);
  const jobs = useSelector(getFilteredJobs);
  const allJobs = useSelector(getAllJobs);

  const showConfirm = (id) => {
    confirm({
      title: "Are you sure to delete this item?",
      icon: <ExclamationCircleOutlined />,
      // content: "Some descriptions",
      onOk() {
        dispatch(deleteJob(id));
      },
      onCancel() {},
    });
  };
  const handleDelete = (id) => {
    showConfirm(id);
  };

  const renderTag = (priority) => {
    let text = "Urgent";
    let color = "red";
    if (priority === 2) {
      text = "Regular";
      color = "orange";
    }
    if (priority === 1) {
      text = "Trivial";
      color = "cyan";
    }
    return (
      <Tag color={color} key={text}>
        {text.toUpperCase()}
      </Tag>
    );
  };

  const openEditModal = (record) => {
    setTaskToEdit(record);
    setIsEditModalOpen(true);
    setCachePriority(record.priority);
  };
  const handleEditOk = (record) => {
    dispatch(updateJob(taskToEdit));
    setIsEditModalOpen(false);
  };

  const handleEditCancel = () => {
    setIsEditModalOpen(false);
    setTaskToEdit({});
  };

  const handlePriorityChange = (value) => {
    setCachePriority(value);
    setTaskToEdit({ ...taskToEdit, priority: value });
  };
  const handlePriorityFilterChange = (value) => {
    dispatch(setPriorityFilter(value));
  };
  const handleNameFilterChange = (event) => {
    dispatch(setNameFilter(event.target.value));
  };

  const columns = [
    {
      title: "Name",
      key: "name",
      render: (job) => job.name,
      width: "80%",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Priority",
      key: "priority",
      dataIndex: "priority",
      render: (_, { priority }) => <>{renderTag(priority)}</>,
      sorter: (a, b) => a.priority - b.priority,
      defaultSortOrder: "descend",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              openEditModal(record);
            }}
            type="primary"
            icon={<EditOutlined />}
          />

          <Button
            onClick={() => {
              handleDelete(record.id);
            }}
            type="danger"
            icon={<DeleteOutlined />}
          />
        </Space>
      ),
    },
  ];
  return (
    <>
      <Row gutter={[0, 0]}>
        <Col span={24}></Col>
        <Col span={24}>
          <TitleWrapper>
            <Title level={5}>Job List</Title>
            <p className="count">
              ({allJobs.length}/{jobs.length})
            </p>
          </TitleWrapper>
        </Col>
      </Row>
      <FilterWrapper>
        <Row>
          <Col span={14}>
            <Input
              prefix={<SearchOutlined />}
              allowClear
              onChange={handleNameFilterChange}
              placeholder="Job name"
            />
          </Col>
          <Col span={10}>
            <StyledSelect
              mode="multiple"
              allowClear
              placeholder="Priority(All)"
              onChange={handlePriorityFilterChange}
              className="select-after"
            >
              <Option value={3}>Urgent</Option>
              <Option value={2}>Regular</Option>
              <Option value={1}>Trivial</Option>
            </StyledSelect>
          </Col>
        </Row>
      </FilterWrapper>

      <Table
        pagination={false}
        columns={columns}
        dataSource={jobs}
        rowKey="id"
      />

      <Modal
        title="Edit Job"
        open={isEditModalOpen}
        onCancel={handleEditCancel}
        onOk={handleEditOk}
      >
        <p>Job name</p>
        <Input disabled value={taskToEdit.name} />
        <br />
        <br />
        <p>Jop priority</p>
        <StyledSelect
          onChange={handlePriorityChange}
          value={cachePriority}
          className="select-after"
          placeholder="Select"
        >
          <Option value={3}>Urgent</Option>
          <Option value={2}>Regular</Option>
          <Option value={1}>Trivial</Option>
        </StyledSelect>
      </Modal>
    </>
  );
}

export default JobList;
