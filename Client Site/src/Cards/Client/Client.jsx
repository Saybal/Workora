import React from "react";
import { Link } from "react-router";

const Client = () => {
  return (
    <section className="py-10 px-4 md:px-0 rounded-xl my-11 bg-no-repeat bg-contain lg:bg-cover bg-center lg:bg-[url('https://cdn.pixabay.com/photo/2023/03/21/18/25/chatgpt-7867916_1280.jpg')]">
      <div className="max-w-7xl mx-auto rounded-xl overflow-hidden flex flex-col-reverse lg:flex-row bg-no-repeat bg-contain md:bg-cover bg-top md:bg-center min-h-[200px] bg-[url('https://cdn.pixabay.com/photo/2023/03/21/18/25/chatgpt-7867916_1280.jpg')] lg:bg-none">
        {/* Left Content */}
        <div className=" text-white p-6 md:p-6 flex-1 flex flex-col justify-between bg-linear-to-t from-black from-65% md:from-10% lg:from-15% to-transparent">
          <div>
            <span className="uppercase text-sm mb-2 bg-black">For businesses</span>
            <h2 className="text-4xl font-bold leading-tight mb-4">
              Hire experts<br /> your way
            </h2>
            <p className="text-base font-medium mb-6">
              Collaborate with a vast network of skilled professionals to complete
              projects—from rapid tasks to major initiatives.
            </p>
          </div>

          
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-green-600 text-white p-4 rounded-lg transition">
              <h3 className="text-lg font-semibold leading-snug">
                Create a listing
                <br />
                to recruit talent
              </h3>
              <p className="text-sm mt-2">Professional Hub</p>
            </div>
            <div className="bg-green-600 text-white p-4 rounded-lg transition">
              <h3 className="text-lg font-semibold leading-snug">
                Explore and
                <br />
                purchase services
              </h3>
              <p className="text-sm mt-2">Service Catalog</p>
            </div>
            <div className="bg-green-600 text-white p-4 rounded-lg transition">
              <h3 className="text-lg font-semibold leading-snug">
                Seek guidance from a
                <br />
                sector specialist
              </h3>
              <p className="text-sm mt-2">Expert Advice</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          
        </div>
      </div>
    </section>
  );
};

export default Client;