import React, { useEffect } from "react";
import Swal from "sweetalert2";

const ContactUs = () => {

  useEffect(() => {
      document.title = "Contuct Us | Workora";
    }, []);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
  
      const formData = new FormData(form);
      const Data = Object.fromEntries(formData.entries());
      console.log(Data);
  
      fetch("http://localhost:3000/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            Swal.fire({
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
            form.reset();
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: error.message || "Something went wrong",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    };
  return (
    <div className="bg-base-100 text-base-content px-6 py-12 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Contact <span className="text-teal-500">Us</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-teal-500">Get in Touch</h2>
            <p>
              Have questions, feedback, or need support? We'd love to hear from you! 
              Reach out to our team and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-2">
              <p><span className="font-semibold">Email:</span> support@workora.com</p>
              <p><span className="font-semibold">Phone:</span> +880 1234 567 890</p>
              <p><span className="font-semibold">Location:</span> Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-base-200 p-6 rounded-2xl shadow-md">
            <div className="form-control">
              <label className="label block">
                <span className="label-text font-medium">Name</span>
              </label>
              <input name="Name" type="text" placeholder="Your Name" className="input input-bordered w-full" required />
            </div>

            <div className="form-control">
              <label className="label block">
                <span className="label-text font-medium">Email</span>
              </label>
              <input name="Email" type="email" placeholder="you@example.com" className="input input-bordered w-full" required />
            </div>

            <div className="form-control">
              <label className="label block">
                <span className="label-text font-medium">Message</span>
              </label>
              <textarea name="Message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
            </div>

            <div className="form-control">
              <button type="submit" className="btn text-white bg-teal-400 hover:bg-teal-500 w-full">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
