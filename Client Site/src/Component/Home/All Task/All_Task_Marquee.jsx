import React, { useEffect, useState } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";
import Task_Card from "./Task_Card";


const useMarqueeSpeed = () => {
  const [speed, setSpeed] = useState(40);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
    
      setSpeed(w < 640 ? 25 : 40);
    };
    handleResize();                  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return speed;
};

const All_Task_Marquee = () => {
  const [tasks, setTasks] = useState([]);
  const marqueeSpeed = useMarqueeSpeed();

  useEffect(() => {
    axios.get('http://localhost:3000/addtask').then((res) => setTasks(res.data));
  }, []);

  return (
    <section className="bg-[#003153] text-white">
      
      <div className="bg-black/40 h-full px-4 sm:px-10 lg:px-20 pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32">
       
        <h2 className="title-font font-medium text-lg sm:text-xl lg:text-2xl">
          Our Client's Posted Jobs
        </h2>

        <h1 className="font-bold title-font leading-tight mt-2
                       text-3xl sm:text-4xl lg:text-5xl">
          Explore fresh listings from our clients <br /> looking to hire talent like you
        </h1>

       
        <Marquee
          pauseOnHover
          speed={marqueeSpeed}
          gradient={false}
          className="mt-10 sm:mt-10 overflow-hidden"
        >
          {tasks.map((task, i) => (
            <Task_Card
              key={i}
              task={task}
             
              className="mx-2 sm:mx-4 lg:mx-6 flex-shrink-0"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default All_Task_Marquee;
