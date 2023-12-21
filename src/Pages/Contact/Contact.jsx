import {  } from "@emailjs/browser";
import emailjs from "emailjs-com";
import { useRef } from "react";
import Swal from "sweetalert2";


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_ou1x90m",
          "template_g8tsvct",
           e.target,
          "FEy8sxlh3qGL34dud"
        )
        .then(
          (result) => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully Send your Email!!",
              showConfirmButton: false,
              timer: 1500
            });
            console.log(result.text);
          },
          (error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
             
            });
            console.log(error.text);
          }
        );
    };

    return (
        <div className="mt-12 flex justify-center" style={{backgroundImage: `url('https://i.ibb.co/j4DTy6X/image.pnghttps://i.ibb.co/ZgPYxQ3/image.png')`,backgroundSize: 'cover', height:'500px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
           
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-6">
          <form ref={form} onSubmit={sendEmail}>
           <div>
            <div className="form-control w-full mb-6">
            <input type="text" name="user_name" placeholder="Enter your name" className="input input-bordered font-bold text-black border-cyan-600" />
            </div>
            <div className="form-control w-full mb-6">
            <input type="email" name="user_email" placeholder="Enter your email" className="input input-bordered font-bold text-black border-cyan-600" />
            </div>
            <div className="form-control w-full mb-6">
            <textarea type="text" name="message" placeholder="Write your message" className="input input-bordered font-bold text-black border-cyan-600 h-24" />
            </div>
            <div className="form-control w-full mb-6">
            <input type="submit" value="Send" className="btn btn-block font-bold bg-cyan-600 text-white text-2xl" />
            </div>
           </div>
          </form>
        </div>
      </div>
    );
};

export default Contact;