import React from "react";
import { useNavigate } from "react-router";

const TaskCard_Home = ({ feature }) => {

const navigate = useNavigate();
    
  const handleClick = (id) => {
    navigate(`/addtask/${id}`);
  };
  return (
    <div className="card card-dash bg-base-100 w-96 border border-base-content rounded-2xl">
      <div className="card-body">
              <h2 className="card-title">{feature.title}</h2>
        <p>
          {feature.overview}
        </p>
        <div className="card-actions justify-end">
          <button onClick={()=>{handleClick(feature._id)}} className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard_Home;
