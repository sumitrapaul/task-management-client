/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import axios, { all } from "axios";
import useTask from "../../../hooks/useTask";

const Profile = () => {
  const {user} = useContext(AuthContext)

  const [task, ,refetch] = useTask();
  console.log(task);
  // const [alltask, setAlltask] = useState(task);
  // console.log(alltask)
  

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://task-management-server-lake-ten.vercel.app/tasks/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Your task has been deleted.", "success");

              // const remaining = alltask.filter((pro) => pro._id !== _id);
              // setAlltask(remaining);

              refetch();
            }
          });
      }
    });
  };

  const handleDragStart = (e, id) => {
    // console.log(id)
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDrop = async (e, status) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
   const updatedTasks = task.map((t) => {
      if (t._id === taskId) {
        t.status = status;
        axios.put(`https://task-management-server-lake-ten.vercel.app/tasks/${taskId}`, { status });
      }
      return t;
    });
    refetch();
  };

  return (
    <div className="mt-12">
      <Helmet>
        <title>TaskMaster | Dashboard</title>
      </Helmet>
    

    

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
        <div
          className="todo-list"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Todo")}
        >
          <h2 className="text-2xl font-bold text-center text-cyan-600 mb-16 underline">TO DO</h2>
          {task
            .filter((t) => t.status === "Todo")
            .map((t) => (
              <div
                key={t._id}
                draggable
                onDragStart={(e) => handleDragStart(e, t._id)}
              >
                <div className="card w-96 bg-cyan-200 shadow-xl my-4">
                  <div className="card-body">
                    <h2 className="card-title">Title: {t.title}</h2>
                    <p>
                      <span className="font-bold">Status:</span> {t.status}
                    </p>

                    
                      <p>
                        <span className="font-bold mb-3">Priority:</span>{" "}
                        {t.priority}
                      </p>
                      <p>
                        <span className="font-bold">Deadline:</span>{" "}
                        {t.deadline}
                      </p>
                    
                    <div className="card-actions justify-end">
                      <Link to={`/dashboard/updateTask/${t._id}`}>
                        <button className="btn bg-cyan-600 text-white">
                          Edit
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDelete(t._id)}
                        className="btn bg-cyan-600 text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div
          className="todo-list"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Ongoing")}
        >
          <h2 className="text-2xl font-bold text-center text-cyan-600 mb-16 underline">ONGOING</h2>
          {task
            .filter((t) => t.status === "Ongoing")
            .map((t) => (
              <div
                key={t._id}
                draggable
                onDragStart={(e) => handleDragStart(e, t._id)}
              >
                <div className="card w-96 bg-cyan-200 shadow-xl my-4">
                  <div className="card-body">
                    <h2 className="card-title">Title: {t.title}</h2>
                    <p>
                      <span className="font-bold">Status:</span> {t.status}
                    </p>

                    
                      <p>
                        <span className="font-bold mb-3">Priority:</span>{" "}
                        {t.priority}
                      </p>
                      <p>
                        <span className="font-bold">Deadline:</span>{" "}
                        {t.deadline}
                      </p>
                 
                    <div className="card-actions justify-end">
                      <Link to={`/dashboard/updateTask/${t._id}`}>
                        <button className="btn bg-cyan-600 text-white">
                          Edit
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDelete(t._id)}
                        className="btn bg-cyan-600 text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div
          className="todo-list"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Completed")}
        >
          <h2 className="text-2xl font-bold text-center text-cyan-600 mb-16 underline">COMPLETED</h2>
          {task
            .filter((t) => t.status === "Completed")
            .map((t) => (
              <div
                key={t._id}
                draggable
                onDragStart={(e) => handleDragStart(e, t._id)}
              >
                <div className="card w-96 bg-cyan-200 shadow-xl my-4">
                  <div className="card-body">
                    <h2 className="card-title">Title: {t.title}</h2>
                    <p>
                      <span className="font-bold">Status:</span> {t.status}
                    </p>

                   
                      <p>
                        <span className="font-bold mb-3">Priority:</span>{" "}
                        {t.priority}
                      </p>
                      <p>
                        <span className="font-bold">Deadline:</span>{" "}
                        {t.deadline}
                      </p>
                   
                    <div className="card-actions justify-end">
                      <Link to={`/dashboard/updateTask/${t._id}`}>
                        <button className="btn bg-cyan-600 text-white">
                          Edit
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDelete(t._id)}
                        className="btn bg-cyan-600 text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
