/* eslint-disable no-unused-vars */
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, handleProfileUpdate, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;
    console.log(name, email, image, password);

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one capital letter");
      return;
    } else if (!/[@$!%*?&]/.test(password)) {
      toast.error("Password must contain at least one special character");
      return;
    }
    createUser(email, password)
      .then((res) => {
        const user={email}
        handleProfileUpdate(name, image).then((res) => {
          toast.success("Users created successfully");
          navigate("/");
        });
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
    <div className="mb-8 h-auto" style={{backgroundImage: `url('https://i.ibb.co/xL35K73/image.png')`,backgroundSize: 'cover', backgroundPosition: 'center', height: '700px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'4px'}}>
       <Helmet>
        <title>TaskMaster | Register</title>
      </Helmet>
      <div className="card flex-shrink-0 w-[400px] md:w-[500px] mx-auto shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} className="card-body">
        <div>
        <h1 className="text-2xl md:text-3xl font-bold my-2 text-center">
          Register now!
        </h1>
      </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="input input-bordered border-cyan-600 text-black font-bold"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="input input-bordered text-black font-bold border-cyan-600"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              placeholder="Enter your photo"
              name="image"
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
            <button className="btn bg-cyan-600 text-white text-xl">Register</button>
          </div>
        </form>
        <p className="text-center">
          Already have an account? Please{" "}
          <Link to="/login" className="text-cyan-600 font-bold">
            Login
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

export default Register;
