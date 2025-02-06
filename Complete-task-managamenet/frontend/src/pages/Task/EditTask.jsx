import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Button } from "antd";
import useTodos from "../../hooks/useTodos";

export default function EditTask() {

  const { updateTodosHandler } = useTodos();


  
  const { id } = useParams();
  const { allTodos, updateLoading } = useTodos();
  console.log("update...", updateLoading);
  console.log(allTodos)
  const currentTask = allTodos?.data?.find((item) => item?._id == id);
  console.log(currentTask);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  


  const onSubmit = async (data) => {
    console.log( data);  
    updateTodosHandler(id, data,'/');
  };

  return (
    <div className="max-w-[800px] m-auto flex justify-center items-center h-[100vh]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-6 w-[500px] m-auto bg-gray-400 flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-center text-white">Edit Task</h1>
          <input
            defaultValue={currentTask?.title}
            placeholder="Enter title"
            className="p-2 rounded-md"
            {...register("title", { required: true })}
          />
          {errors.title && <span>Title is required</span>}

          <input
            defaultValue={currentTask?.description}
            placeholder="Enter Description"
            className="p-2 rounded-md"
            {...register("description", { required: true })}
          />
          {errors.description && <span>Description is required</span>}

          <input
            defaultValue={currentTask?.due_date}
            placeholder="Enter Due Date"
            className="p-2 rounded-md"
            {...register("due_date", { required: true })}
          />
          {errors.due_date && <span>Due date is required</span>}

          <div className="flex justify-end my-4">
             <Button loading={updateLoading}  type="primary" htmlType="submit">
        Update
      </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
