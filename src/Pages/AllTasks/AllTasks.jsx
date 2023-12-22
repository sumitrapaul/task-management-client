/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import AllTask from "./AllTask";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useTask from "../../hooks/useTask";


const AllTasks = () => {
  const { user } = useContext(AuthContext)

  const [task, ,refetch] = useTask();



    return (
        <div>
            <div className="overflow-x-auto mt-8">
            <Helmet>
        <title>TaskMaster | Pending Tasks</title>
      </Helmet>
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Description</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {task
            .filter((t) => t.status === "Todo").map((t, i) => (
              <AllTask key={t._id} t={t} i={i + 1}></AllTask>
            ))}
          </tbody>
        </table>
      </div> 
        </div>
    );
};

export default AllTasks;