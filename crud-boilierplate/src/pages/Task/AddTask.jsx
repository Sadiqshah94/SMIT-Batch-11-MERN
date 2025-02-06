import { useForm } from "react-hook-form";
import { Button } from "antd";

export default function AddTask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-[800px] m-auto flex justify-center items-center h-[100vh]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-6 w-[500px] m-auto bg-gray-400 flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-center text-white">
            Add Task
          </h1>
          <input
            placeholder="Enter title"
            type="date"
            className="p-2 rounded-md"
            {...register("title", { required: true })}
          />
          {errors.title && <span>Title is required</span>}

          <input
            placeholder="Enter Description"
            className="p-2 rounded-md"
            {...register("description", { required: true })}
          />
          {errors.description && <span>Description is required</span>}

          <input
            placeholder="Enter Due Date"
            className="p-2 rounded-md"
            {...register("due_date", { required: true })}
          />
          {errors.due_date && <span>Due date is required</span>}

          <div className="flex justify-end my-4">
           <Button  type="primary" htmlType="submit">
        Submit
      </Button>
            
          </div>
        </div>
      </form>
    </div>
  );
}
