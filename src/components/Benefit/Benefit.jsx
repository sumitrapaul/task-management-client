import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Benefit = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-10">
      <h1 className="text-2xl md:text-3xl font-bold my-2 text-center text-cyan-600 mb-12">
        Discover who benefits from our platform
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
        <div
          data-aos="flip-right"
          data-aos-offset="200"
          data-aos-duration="300"
          className="card w-full bg-cyan-200 shadow-xl"
        >
          <figure>
            <img
              className="w-full h-[300px] mt-2"
              src="https://i.ibb.co/Nn60B9s/image.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Corporate Professionals</h2>
            <p>Stay organized with work tasks and dealines</p>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-duration="300"
          className="card w-full bg-cyan-200 shadow-xl"
        >
          <figure>
            <img
              className="w-full h-[300px] mt-2"
              src="https://i.ibb.co/YLXBCMX/image.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Developers</h2>
            <p>Efficiently manage coding tasks and project timelines</p>
          </div>
        </div>
        <div
          data-aos="flip-right"
          data-aos-offset="200"
          data-aos-duration="300"
          className="card w-full bg-cyan-200 shadow-xl"
        >
          <figure>
            <img
              className="w-full h-[300px] mt-2"
              src="https://i.ibb.co/092PYCn/image.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bankers</h2>
            <p>Track financial tasks and manage priorities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
