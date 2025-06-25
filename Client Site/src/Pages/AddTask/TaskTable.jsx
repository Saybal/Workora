import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const TaskTable = ({ onViewBids, name }) => {
  const [taskdata, setTaskData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Task Details | Workora";
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/mypost/${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTaskData(data);
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
  }, [name]);
    
    
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
            fetch(`http://localhost:3000/addtask/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                    setTaskData(taskdata.filter((task) => task._id !== id));
                }
                });
            }
        });

    }

  return (
    <div className="overflow-x-auto p-4">
      {loading ? (
        <div className="text-center">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
        <table className="table border border-collapse border-base-contant table-zebra w-full">
          {/* Table Head */}
          <thead className="bg-base-200 text-base-content text-center text-sm lg:text-base">
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th className="min-w-[150px]">Overview</th>
              <th>Deadline</th>
              <th>Budget</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {taskdata?.map((task, index) => (
              <tr key={index} className="hover text-sm sm:text-base">
                <td className="whitespace-normal break-words  border border-collapse border-base-contant">{task.title}</td>
                <td className="whitespace-nowrap  border border-collapse border-base-contant">{task.category}</td>
                <td className="whitespace-normal break-words  border border-collapse border-base-contant">
                  {task.overview}{" "}
                  <Link
                    to={`/addtask/${task._id}`}
                    className="text-blue-500 underline ml-1"
                  >
                    Details
                  </Link>
                </td>
                <td className="whitespace-nowrap  border border-collapse border-base-contant">{task.deadline}</td>
                <td className="whitespace-nowrap  border border-collapse border-base-contant">${task.budget}</td>
                <td className="flex flex-row md:flex-col justify-center items-center gap-2 border-t">
                  <Link to={`/updatetask/${task._id}`}>
                    <button
                      className="justify-center btn btn-outline md:w-full text-[#1ed61e] border-[#1ed61e] hover:bg-[#1ed61e] hover:text-white w-auto"
                    >
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="btn btn-outline btn-error md:w-full w-auto"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => onViewBids(task._id)}
                    className="btn btn-info btn-outline md:w-full w-auto"
                  >
                    Bids : {task.Bid}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskTable;
