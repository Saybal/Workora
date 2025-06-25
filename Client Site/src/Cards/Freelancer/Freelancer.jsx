import React from "react";

const Freelancer = () => {
  return (
    <section className="py-10 px-4 md:px-0 bg-no-repeat bg-contain rounded-xl my-11 lg:bg-[url('https://thumbnails.production.thenounproject.com/6HqHY5AKXbDnNVKpRRrTbfnCNtk=/fit-in/1000x1000/photos.production.thenounproject.com/photos/D6053F54-2C20-4B9C-833E-3E335E691AB6.jpg')]">
      <div className="max-w-7xl mx-auto rounded-xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left Image */}
        <div className="flex-1 ">
          <img className="w-full visible lg:invisible" src="https://thumbnails.production.thenounproject.com/6HqHY5AKXbDnNVKpRRrTbfnCNtk=/fit-in/1000x1000/photos.production.thenounproject.com/photos/D6053F54-2C20-4B9C-833E-3E335E691AB6.jpg" alt="" />
        </div>

        {/* Right Content */}
        <div className="flex-1 bg-blue-600 text-white p-6 md:p-10 flex flex-col justify-between">
          <div>
            <p className="uppercase text-sm mb-2">For professionals</p>
            <h2 className="text-4xl font-bold leading-tight mb-4">
              Discover amazing
              <br />
              projects
            </h2>
            <p className="text-base font-medium mb-6">
              Connect with inspiring clients and elevate your career or
              business to new levels.
            </p>
          </div>

          {/* Divider & Sub-links */}
          <div className="mt-8 border-t border-white/30 pt-6">
            <div>
              <div className="flex flex-col md:flex-row md:gap-8 text-sm">
                <span>
                  Discover projects suited to every phase of your freelance journey
                </span>
                <span>Choose your work schedule, location, and style</span>
                <span>Unlock diverse earning opportunities</span>
              </div>
              <button className="bg-white text-blue-600 font-semibold px-4 py-2 mt-5 rounded hover:bg-blue-100 transition">
                Explore projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freelancer;