import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const TaskCreate = () => {

    const { user, loading } = useContext(AuthContext);
  // console.log(user, loading);
  const { email, displayName } = user || "";

  const { register, handleSubmit } = useForm();
  const currentDate = new Date();
  const [selectedDeadline, setSelectedDeadline] = useState(new Date());

//   const onSubmit = (data) => {
//     data.userEmail = email;
//     data.userName = displayName;

//     data.deadline = selectedDeadline;
//     // console.log(data.deadline)

//     fetch("https://job-seeking-server-virid.vercel.app/addajobs", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())

//       .then((result) => {
      
//         toast.success("successfully job added");
//         // console.log(result);
//         navigate("/");
        
//       });
//   };

    return (
        <div>
         <div className="bg-[#F4F3F0] p-24">
      <Helmet>
        <title>TaskMaster | Create A Task</title>
      </Helmet>
      <h2 className="text-2xl md:text-3xl font-bold my-2 text-center text-cyan-600">
        Add A Task
      </h2>
      <form className="flex flex-col gap-3">

        <label
          htmlFor=""
          className="text-md font-semibold text-gray-800 px-1 -mb-3"
        >
        Title
        </label>

        <input
          type="text"
          {...register("title")}
          placeholder="Task Title"
          required
          className="bg-gray-300 px-5 py-2 rounded"
        />


        <label
          htmlFor=""
          className="text-md font-semibold text-gray-800 px-1 -mb-3"
        >
          Priority
        </label>

        <select
          className="text-input bg-gray-300 px-5 py-2 rounded"
          {...register("priority")}
        >
          <option value="low">low</option>
          <option value="moderate">moderate</option>
          <option value="high">high</option>
        </select>

        

        <label
          htmlFor=""
          className="text-md font-semibold text-gray-800 px-1 -mb-3"
        >
          Description
        </label>

        <input
          type="text"
          {...register("description")}
          placeholder="Task Description"
          required
          className="text-input bg-gray-300 px-5 py-2 rounded"
        />

        <label htmlFor="" className="text-md font-semibold text-gray-800 px-1 ">
          Deadline
        </label>

        <div className="w-full">
          <DatePicker
            selected={selectedDeadline}
            dateFormat="yyyy/MM/dd"
            className="input input-bordered text-input bg-gray-300 px-5 py-2 rounded w-full max-w-xs"
            minDate={currentDate}
          />
        </div>

        

        <input
          type="submit"
          value="Add Task"
          className="btn btn-block bg-cyan-600 text-white text-xl"
        />
      </form>
    </div>
        </div>
    );
};

export default TaskCreate;