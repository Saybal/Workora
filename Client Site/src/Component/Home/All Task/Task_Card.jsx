import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Task_Card = ({ task, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`
        bg-black/30 border border-white/40 rounded-2xl shadow-md p-4
        w-[220px] sm:w-[200px] md:w-[250px] lg:w-[280px] 
        h-[380px] sm:h-[370px] md:h-[400px] lg:h-[420px]  
        flex-shrink-0 mx-2 flex flex-col justify-between 
        ${className}
      `}
    >
      <img
        src={task.image}
        alt={task.period}
        className="rounded-md w-full h-32 sm:h-36 md:h-40 lg:h-44 object-cover mb-3"
      />
      <h3 className="text-lg sm:text-xl font-semibold text-[#FFBA00]">
        {task.title}
      </h3>
      {/* Scrollable Overview */}
      <div className="flex-1 overflow-hidden my-2">
        <p className="text-xs sm:text-sm md:text-base text-[#EDEAE0] overflow-y-scroll max-h-[80px]">
          {task.overview}
        </p>
      </div>

      {/* Bottom Button */}
      <Link to={`/addtask/${task._id}`} className="btn w-full mt-2 shawdow-none bg-[#960018] border-none text-amber-50">View Details</Link>
    </motion.div>
  );
};

export default Task_Card;
