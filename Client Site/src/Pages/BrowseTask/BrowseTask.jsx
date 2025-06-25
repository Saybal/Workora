import React, { useEffect, useState } from "react";
import TaskCard from "../AddTask/TaskCard";
import Swal from "sweetalert2";

const BrowseTask = () => {
  const [taskdata, setTaskData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      document.title = "Browse Tasks | Workora";
    }, []);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/addtask")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTaskData(data);
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
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div className="text-center">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
        ""
      )}

      {taskdata.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
};

export default BrowseTask;
