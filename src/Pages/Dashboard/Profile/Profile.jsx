import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [task, setTask] = useState([]);

  useEffect(() => {
    if(user) {
      fetch(`http://localhost:5000/tasks?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setTask(data);
        });
    }
  }, [user]);

  return (
    <div className="mt-12">
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img className="h-[300px] w-full" src={user.photoURL} alt="Shoes" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name: {user.displayName}</h2>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
