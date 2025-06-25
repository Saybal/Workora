import React from 'react';
import { useNavigate } from 'react-router';

const FeatureSingleCard = ({ feature, title }) => {
    
    const navigate = useNavigate();
    const handleClick = (category) => {
    
    navigate(`/browsetask/${category}`);
  };
  return (
    <div className="card w-full rounded-xl max-w-2xl shadow-xl bg-white flex flex-row lg:h-64 h-auto">
      {/* Left Content */}
      <div className="flex-1 bg-blue-600 text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
          <p className="text-base">
            {feature.subtitle}
          </p>
        </div>
        <button onClick={()=>handleClick(title)} className="btn btn-success mt-4">Get similar jobs</button>
      </div>
      {/* Right Image */}
      <div className="flex-1">
        <img
          src={feature.image}
          alt="Placeholder Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FeatureSingleCard;