/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AllTask = ({ t }) => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const { _id, userName, description, title, priority, deadline, status } = t;

  return (
    <tr>
      <td>{userName}</td>
      <td>{title}</td>
      <td>{deadline}</td>
      <td>{status}</td>
      <td>{description}</td>
      <td>{priority}</td>
    </tr>
  );
};

export default AllTask;
