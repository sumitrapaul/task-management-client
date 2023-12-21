/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import AllTask from "./AllTask";


const AllTasks = () => {
  const [task, setTask] = useState([])
  const [loaded, setLoaded] = useState([]);
    useEffect(() => {
        const fetchJob = () => {
          fetch("http://localhost:5000/tasks")
            .then((res) => res.json())
            .then((data) => {
              setLoaded(data);
              setTask(data);
            });
        };
        fetchJob();
      }, []);

    return (
        <div>
            <div className="overflow-x-auto mt-8">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {task.map((t, i) => (
              <AllTask key={t._id} t={t} i={i + 1}></AllTask>
            ))}
          </tbody>
        </table>
      </div> 
        </div>
    );
};

export default AllTasks;