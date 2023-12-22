import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useTask = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const axiosSecure = useAxiosSecure();
  const {
    data: task = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["task", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tasks1/${user?.email}`);
      return res.data;
    },
  });
  return [task, loading, refetch];
};

export default useTask;
