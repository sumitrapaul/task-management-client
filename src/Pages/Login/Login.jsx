/* eslint-disable no-unused-vars */
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user={email}
        toast.success("Users logged in successfully!!");
        e.target.reset;
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        toast.success("Users logged in successfully!!");
        navigate("/")
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="mb-8" style={{backgroundImage: `url('https://i.ibb.co/xL35K73/image.png')`,backgroundSize: 'cover', backgroundPosition: 'center', height:'600px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:"10px"}}>
      <div className="card flex-shrink-0 w-[400px] md:w-[500px] mx-auto shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
        <div>
        <h1 className="text-2xl md:text-3xl font-bold my-2 text-center">
          Login now!
        </h1>
      </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="input input-bordered border-cyan-600 text-black font-bold"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="input input-bordered border-cyan-600 text-black font-bold"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-cyan-600 text-white text-xl">Login</button>
          </div>
        </form>

        <p className="text-center mb-4">
          Do not have an account? Please{" "}
          <Link to="/register" className="text-cyan-600 font-bold">
            Register
          </Link>
        </p>
        <div className="flex justify-center items-center">
          <button onClick={handleGoogle} className="btn bg-cyan-600 text-white text-xl">
            Google
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
