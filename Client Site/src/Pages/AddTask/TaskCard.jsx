import React from "react";
import {
  FaRegStar,
  FaMapMarkerAlt,
  FaRegCheckCircle,
  FaMoneyBillWave,
} from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router";


const TaskCard = ({task}) => {
  return (
    <div className="bg-base-300 rounded-xl shadow-lg p-6 max-w-4xl mx-auto my-6 border border-base-200">
      <div className="flex flex-col gap-2 md:flex-row justify-between items-start md:items-center">
        <div>
                  <p className="text-gray-500 text-sm">Posted on {task.deadline}</p>
          <h2 className="text-xl font-semibold mt-1">
            {task.title}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Posted by <strong>{task.username}</strong> Email: <strong>{task.email}</strong>
          </p>
        </div>

        <div className="flex gap-2 mt-2 md:mt-0">
          <button className="btn btn-ghost btn-sm text-base lg:text-xl text-green-600"><BiLike /></button>
          <button className="btn btn-ghost btn-sm text-base lg:text-xl text-red-600"><BiDislike/></button>
          <button className="btn btn-ghost btn-sm text-base lg:text-xl text-gray-500"><IoMdHeartEmpty/></button>
        </div>
      </div>

        <div className="mt-4 text-sm text-gray-700">
        <p className="mb-3"> <strong className="text-base-content">Category:</strong> <span className="badge badge-outline font-semibold text-green-500">{task.category}</span> </p>
        <p className="text-gray-500">
          🚀 <strong className="text-base-content">Join in our exciting journey:</strong> {task.overview}
        </p>
      </div>

      {/* <div className="flex flex-wrap gap-2 mt-4 text-sm">
        <span className="badge badge-outline">Smartphone</span>
        <span className="badge badge-outline">Android</span>
        <span className="badge badge-outline">Android App Development</span>
        <span className="badge badge-outline">Flutter</span>
        <span className="badge badge-outline">Mobile App Development</span>
        <span className="badge badge-outline">Firebase</span>
        <span className="badge badge-outline">Kotlin</span>
        <span className="badge badge-outline">iOS</span>
      </div> */}

      <div className="flex flex-wrap gap-4 mt-6 text-sm items-center text-gray-600">
        <div className="flex items-center gap-1">
          <FaRegCheckCircle className="text-green-500" />
          <span className="text-gray-500">Payment verified</span>
        </div>
       
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt />
            <span className="text-gray-500">{task.location}</span>
        </div>
        
          </div>
          <div className=" w-full flex justify-between items-center mt-4">
              <p> <strong>Estimate Budget: </strong> $ {task.
                  budget}</p>
              <Link to={`/addtask/${task._id}`} className="btn bg-[#1ed61e] text-amber-50">Learn more details</Link >
          </div>
    </div>
  );
};

export default TaskCard;
