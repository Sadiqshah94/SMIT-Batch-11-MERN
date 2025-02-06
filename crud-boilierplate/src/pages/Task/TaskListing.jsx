import { Button, Popconfirm, Table } from "antd";
import { useNavigate } from "react-router-dom";

const TaskListing = () => {
  const navigate = useNavigate();

  
  const dataSource  = [
    {
      id: 1,
      title: "ddfg",
      description: "sdfdf",
      due_date:"12-20-2024"
      
    },
    {
      id: 2,
      title: "ddfg",
      description: "sdfdf",
      due_date:"12-20-2024"
      
    },
    {
      id: 3,
      title: "ddfg",
      description: "sdfdf",
      due_date:"12-20-2024"
      
    }
  ]


  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Due Date",
      dataIndex: "due_date",
      key: "due_date",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => (
        <div className="flex gap-2">
 <Button 
        onClick={() => navigate(`/edit/${record.id}`)}
      >
        Edit
      </Button>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            okText="Yes"
            cancelText="No"
            // onConfirm={() => deleteT(record._id)}
          >
            {/* loading={deleting === record._id} */}
            <Button danger >Delete</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="w-1/2 m-auto my-6">
      <div className="flex justify-end my-4">
        <Button className="w-32 py-4" onClick={() => navigate("/add")}>
          Add
        </Button>
      </div>
      <Table
        pagination={dataSource.length>5}
          dataSource={dataSource?.map((task) => ({
            key: task?.id,
            ...task,
          }))}
          columns={columns}
        />
    </div>
  );
};

export default TaskListing;
