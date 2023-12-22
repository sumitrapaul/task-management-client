import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="mt-10">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(https://i.ibb.co/j4DTy6X/image.png)" }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-3xl font-bold">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Welcome to TaskMaster",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Your Ultimate Task Management Solution",
                  1000,
                  "Effortless Task Organization",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block", gap: "6px" }}
                repeat={Infinity}
              />
            </h1>
            <p className="mb-5 text-xl">
              Effortlessly manage tasks,collaborate with your team,boost
              productivity!
            </p>
            <Link to="/login">
              <button className="btn btn-outline text-white bg-cyan-600 text-xl">
                Let’s Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
