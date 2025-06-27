import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-base-100 text-base-content px-6 py-12 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          About <span className="text-teal-500">Workora</span>
        </h1>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            <strong>Workora</strong> is a dynamic freelancing platform that connects talented
            professionals with clients around the globe. Whether you're a freelancer looking
            for exciting projects or a client in need of skilled expertise, Workora makes the
            process simple, efficient, and secure.
          </p>

          <p>
            We empower freelancers to showcase their talents and grow their careers while
            giving businesses the tools they need to bring their ideas to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-base-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-teal-500 mb-2">Our Mission</h2>
              <p>
                To bridge the gap between opportunity and talent by providing a transparent,
                accessible, and fair platform for freelance work.
              </p>
            </div>

            <div className="bg-base-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-teal-500 mb-2">Why Choose Us?</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Easy and secure job posting & bidding</li>
                <li>Transparent review and rating system</li>
                <li>Wide range of skill categories</li>
                <li>Built-in communication tools</li>
                <li>Fast support and dispute resolution</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-medium">
              Join <span className="text-teal-500">Workora</span> today and build your future —
              one project at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
