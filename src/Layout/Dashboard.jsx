
import { NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {


  return (
    <div className="flex gap-6">
      <div className="w-64 min-h-screen bg-cyan-600">
        <ul className="menu space-y-4">
          <>
            <li>
              <NavLink to="/dashboard/profile" className="text-xl font-bold">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/createTask" className="text-xl font-bold">Task Create</NavLink>
            </li>
          </>

          <div className="divider"></div>
          <li>
            <NavLink to="/" className="text-xl font-bold">Home</NavLink>
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
