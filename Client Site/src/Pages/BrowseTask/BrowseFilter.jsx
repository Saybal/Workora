import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import TaskCard from "../AddTask/TaskCard";

const BrowseFilter = () => {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [BrowseFilter, setBrowseFilter] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/browsetask/${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBrowseFilter(data);
        setLoading(false);
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
        setLoading(false);
      });
  }, []);  //  
  return (
    <div>
      {loading ? (
        <div className="text-center">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
        ""
      )}

      {BrowseFilter.map((task) => (
        <TaskCard task={task} />
      ))}
    </div>
  );
};

export default BrowseFilter;
