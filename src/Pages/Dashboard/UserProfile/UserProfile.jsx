import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";


const UserProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="mt-12">
           <Helmet>
        <title>TaskMaster | User Profile</title>
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
        </div>
    );
};

export default UserProfile;