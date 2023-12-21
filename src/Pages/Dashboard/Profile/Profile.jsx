import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";



const Profile = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
           <div className="flex justify-center items-center mt-8">
        <img className="h-[300px] w-[300px]" src={user.photoURL} alt="" />
        </div> 
        </div>
    );
};

export default Profile;