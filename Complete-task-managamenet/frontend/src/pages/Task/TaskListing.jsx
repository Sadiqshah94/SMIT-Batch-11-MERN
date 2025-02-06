import { Button,  Table, Spin, Popconfirm } from "antd";
import { useEffect } from "react";
import useTodos from "../../hooks/useTodos";
import { useNavigate } from "react-router-dom";

const TaskListing = () => {
  const navigate = useNavigate();
  const { tasksLoading, allTodos, getTodosHandler, deleteTodosHandler } = useTodos();
  console.log(allTodos);
  
  useEffect(() => {
    getTodosHandler();
  },[])
  

  const deleteTodos =(id) => {
    console.log(id);
    deleteTodosHandler(id)
  }

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
        // disabled={deleting === record._id} 
        onClick={() => navigate(`/edit/${record._id}`)}
        // style={{
        //   cursor: deleting === record._id ? 'not-allowed' : 'pointer',
        //   opacity: deleting === record._id ? 0.5 : 1,
        // }}
        // aria-disabled={deleting === record._id}
      >
        Edit
      </Button>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteTodos(record._id)}
          >
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
      {tasksLoading ? (
        <div className="flex items-center justify-center">
          <Spin size="large" />
        </div>
      ) : (
          <Table
          pagination={allTodos?.length > 5}
            
          dataSource={allTodos?.data?.map((task) => ({
            key: task?._id,
            ...task,
          }))}
          columns={columns}
        />
      )}
    </div>
  );
};

export default TaskListing;
