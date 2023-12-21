import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
 

  return (
    <div className="flex gap-6">
      <div className="w-64 min-h-screen bg-red-200">
        <ul className="menu space-y-4">
          <>
            <li>
              <NavLink to="/dashboard/createTask">Task Create</NavLink>
            </li>
          </>

          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
