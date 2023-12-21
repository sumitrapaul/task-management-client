import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user } = useContext(AuthContext);
  
  const [task, setTask] = useState([]);

  const secureData = useAxiosSecure();

  const url = `/tasks?email=${user?.email}`;
  useEffect(() => {
    secureData.get(url).then((res) => {
      console.log(res.data)
      setTask(res.data)
    })
    
  }, [url, secureData]);

  // useEffect(() => {
  //   if (user) {
  //     fetch(`http://localhost:5000/tasks?email=${user.email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setTask(data);
  //       });
  //   }
  // }, [user]);

  const handleDelete = (_id) => {
    // console.log(_id)
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
        // console.log(_id)

        fetch(`http://localhost:5000/tasks/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire("Your task has been deleted.", "success");

              const remaining = task.filter((pro) => pro._id !== _id);
              setTask(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mt-12">
        <Helmet>
        <title>TaskMaster | Dashboard</title>
      </Helmet>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img className="h-[300px] w-full" src={user?.photoURL} alt="Shoes" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name: {user?.displayName}</h2>
          <p>Email: {user?.email}</p>
        </div>
      </div>

      <div className="grid">
        {task.map((t) => (
          <div key={t._id}>
            <div className="card w-96 bg-cyan-200 shadow-xl my-4">
              <div className="card-body">
                <h2 className="card-title">Title: {t.title}</h2>
                <p>
                  <span className="font-bold">Status:</span> {t.status}
                </p>
                <p>{t.description}</p>
                <div className="flex">
                  <p>
                    <span className="font-bold">Priority:</span> {t.priority}
                  </p>
                  <p>
                    <span className="font-bold">Deadline:</span> {t.deadline}
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <Link to={`/dashboard/updateTask/${t._id}`}>
                    <button className="btn bg-cyan-600 text-white">Edit</button>
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
  );
};

export default Profile;
