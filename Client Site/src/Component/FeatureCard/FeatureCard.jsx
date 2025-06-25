import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import FeatureSingleCard from "./FeatureSingleCard";

const FeatureCard = () => {
  const [featureData, setfeatureData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("features.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
          setfeatureData(data);
          setLoading(false)
      })
      .catch((error) => {
        Swal.fire({
          //   position: "top-end",
          icon: "error",
          title: error.message || "Something went wrong",
          showConfirmButton: false,
          timer: 1500,
        });
          console.log(error.message);
          setLoading(false)
      });
  }, []);
  return (
    <div className="flex gap-5">
      {loading ? (
        <div className="text-center">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
        ""
      )}

          {
              featureData.map((feature) => (
                  <FeatureSingleCard key={feature.id} feature={feature} />
              ))
      }
    </div>
  );
};

export default FeatureCard;
