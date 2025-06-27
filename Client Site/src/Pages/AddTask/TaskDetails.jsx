import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useParams } from "react-router";

const TaskDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [count, setCount] = useState(0);

  const [taskdata, setTaskData] = useState([]);
  const [freelancerdata, setFreelancerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [freelancertasks, setFreelancerTasks] = useState([]);

  useEffect(() => {
    document.title = "Task Details | Workora";
  }, []);

  // !TaskDetails fetch
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/addtask/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTaskData(data);
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
      });
  }, []);

  // Frelancer data fetch
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/freelancers/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFreelancerData(data);
        setFreelancerTasks(data[0].Bidtasks);
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
  }, [count]);

  const handleBid = () => {
  const alreadyBid = freelancertasks.includes(taskdata._id);
  if (alreadyBid) {
    Swal.fire({
      icon: "error",
      title: "You have already placed a bid!",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  // First update freelancer's Bidtasks & Bid count
  fetch(`http://localhost:3000/freelancers/${user.email}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Bidtasks: [...freelancertasks, taskdata._id],
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.modifiedCount > 0) {
        // Then update the task's bid count
        return fetch(`http://localhost:3000/addtask/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      throw new Error("Failed to update freelancer");
    })
    .then((res) => res.json())
    .then((taskResult) => {
      if (taskResult.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "You have placed a bid!",
          showConfirmButton: false,
          timer: 1500,
        });

        // Now re-fetch freelancer data to get updated Bid count
        return fetch(`http://localhost:3000/freelancers/${user.email}`);
      }
      throw new Error("Failed to update task");
    })
    .then((res) => res.json())
    .then((updatedData) => {
      setFreelancerData(updatedData);
      setFreelancerTasks(updatedData[0].Bidtasks);
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: error.message || "Something went wrong",
        showConfirmButton: false,
        timer: 1500,
      });
    });
};


  return (
    <div>
      {loading ? (
        <div className="text-center">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
        ""
      )}

      {!loading && (
        <h2 className="text-center text-base-content font-semibold text-sm md:text-xl mt-5"> You bid for <strong className="text-[#1ed61e]">{freelancerdata[0].Bid}</strong> opportunities.</h2>
      )}

      <div className="bg-base-200 p-6 rounded-xl max-w-3xl mx-auto my-10 shadow-lg">
        {/* Profile Section */}
        {!loading && (
          <div className="flex justify-between items-center">
            <div className="flex flex-col sm:flex-row sm:items-start md:items-center gap-4">
              <div className="avatar">
                {/* <div className="w-20 md:w-24 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-5">
                  <img src={user.photoURL} alt="Profile" />
                </div> */}
              </div>
              <div>
                <h2 className="text-xl sm:text-center lg:text-left font-semibold text-base-content">
                  {taskdata.username}
                </h2>
                <p className="text-sm text-gray-500">{taskdata.email}</p>
              </div>
            </div>

            <div>
              <p className="text-base-content text-base lg:text-xl">
                {" "}
                <strong className="text-green-600">Price:</strong> $
                {taskdata.budget}
              </p>
            </div>
          </div>
        )}

        {!loading && <div className="divider my-4"></div>}

        {/* Job Section */}
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-emerald-500">
              {taskdata.title}
            </h3>
            <button
              disabled={count}
              onClick={handleBid}
              className={`btn bg-[#1ed61e] text-white ${
                count ? "cursor-not-allowed" : ""
              }`}
            >
              Bid Now
            </button>
          </div>
          <p className="mt-2 text-gray-600 text-justify">
            {taskdata.description}
          </p>
        </div>

        <div className="mt-6 text-center">
          <button className="btn bg-[#1ed61e] text-white">
            Contact me for a deal
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
