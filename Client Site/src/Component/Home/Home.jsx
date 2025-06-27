import React, { useEffect, useState } from "react";
import Client from "../../Cards/Client/Client";
import Freelancer from "../../Cards/Freelancer/Freelancer";
import Swal from "sweetalert2";
import Slider_home from "../../Slider/Slider_home.jsx/Slider_home";
import Slider from "../../Slider/Slider";
import Slider_task from "../../Slider/Slider_task";
import Lottie from "lottie-react";
import All_Task_Marquee from "./All Task/All_Task_Marquee";

const Home = () => {
  const [featureData, setFeatureData] = useState([]);
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    document.title = "Home | Workora";
  }, []);

  useEffect(() => {
    fetch("/loading.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) =>
        console.error("Error loading Lottie animation:", error)
      );
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("features.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeatureData(data);
        setLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.message || "Something went wrong",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/addtask")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTask(data);
        setLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.message || "Something went wrong",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  const Section = ({ title, data }) => (
    <div className="w-full px-4 sm:px-6">
      <h1 className="my-6 sm:my-8 text-base-content text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
        {title}
      </h1>
      <Slider_home data={data} />
    </div>
  );

  const ClientTask = ({ task }) => <Slider_task data={task} />;

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      {loading && (
        <div className="text-center py-8">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}

      <div className="w-full mt-4 sm:mt-6 md:mt-8">
        <Slider data={featureData} />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12 py-8 sm:py-12">
        <div className="flex-1 text-center">
          <h2 className="text-3xl text-base-content sm:text-4xl lg:text-5xl font-semibold px-4">
            Increase Your Productivity
          </h2>
        </div>
        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md">
          {animationData ? (
            <Lottie animationData={animationData} className="w-full h-auto" />
          ) : (
            <p className="text-center text-base sm:text-lg">Loading animation...</p>
          )}
        </div>
      </div>

      <Section title="Our highly trending features" data={featureData} />
      <Client />
      {/* <ClientTask task={task} /> */}
      <All_Task_Marquee/>
      <Freelancer />
    </div>
  );
};

export default Home;