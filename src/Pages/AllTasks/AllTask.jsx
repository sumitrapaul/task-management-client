/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AllTask = ({ t }) => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const { _id, userName, title, priority, deadline, status } = t;

  return (
    <tr>
      <td className="text-xl">{userName}</td>
      <td className="text-xl">{title}</td>
      <td className="text-xl">{deadline}</td>
      <td className="text-xl">{status}</td>
      <td className="text-xl">{priority}</td>
    </tr>
  );
};

export default AllTask;
