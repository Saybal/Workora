import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useParams } from "react-router";

const UpdateTask = () => {
  const { user } = useContext(AuthContext);
  const [taskdata, setTaskData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    document.title = "Task Details | Workora";
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/addtask/${id}`)
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
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  const UpdateData = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const TaskData = Object.fromEntries(formData.entries());
      console.log(TaskData);
      
      fetch(`http://localhost:3000/addtask/${id}`, {
          method: "PUT",
            headers: {
                "Content-Type": "application/json",
          },
          body: JSON.stringify(TaskData),
            
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      

  };
  return (
    <div className="bg-base-200 p-6 min-h-screen">
      {loading ? (
        <div className="text-center">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
        ""
      )}
      <div className="max-w-4xl mx-auto bg-base-300 p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add a New Task for Your Expert
        </h2>

        {!loading && taskdata.category && (
          <form
            onSubmit={UpdateData}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Task Title */}
            <div className="form-control">
              <label className="label block">
                <span className="label-text font-semibold">Task Title</span>
              </label>
              <input
                name="title"
                type="text"
                defaultValue={taskdata.title}
                className="input input-bordered"
                required
              />
            </div>

            {/* Category */}
            <div className="form-control">
              <label className="label block">
                <span className="label-text font-semibold">Category</span>
              </label>
              <select
                defaultValue={taskdata.category || ""}
                name="category"
                className="select select-bordered"
                required
              >
                <option>Select a category</option>
                <option>Web Development</option>
                <option>Design</option>
                <option>Writing</option>
                <option>Marketing</option>
              </select>
            </div>

            {/* Description */}
            <div className="form-control md:col-span-2">
              <label className="label block">
                <p className="label-text font-semibold block">Description</p>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered"
                rows="3"
                defaultValue={taskdata.description}
                required
              ></textarea>
            </div>

            {/* Overview */}
            <div className="form-control md:col-span-2">
              <label className="label block">
                <span className="label-text font-semibold">Overview</span>
              </label>
              <textarea
                name="overview"
                className="textarea textarea-bordered"
                rows="2"
                defaultValue={taskdata.overview}
                required
              ></textarea>
            </div>

            {/* Deadline */}
            <div className="form-control">
              <label className="label block">
                <span className="label-text font-semibold">Deadline</span>
              </label>
              <input
                defaultValue={taskdata.deadline}
                name="deadline"
                type="date"
                className="input input-bordered"
                required
              />
            </div>

            {/* Budget */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Budget ($)</span>
              </label>
              <input
                name="budget"
                type="number"
                className="input input-bordered"
                defaultValue={taskdata.budget}
                min="0"
                required
              />
            </div>

            {/* Location */}
            <div className="form-control">
              <label className="label block">
                <span className="label-text font-semibold">Location</span>
              </label>
              <input
                name="location"
                type="text"
                className="input input-bordered"
                defaultValue={taskdata.location}
                required
              />
            </div>

            {/* User Email (Read Only) */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">User Email</span>
              </label>
              <input
                name="email"
                type="email"
                className="input input-bordered"
                value={user?.email || "Anonymous User"}
                readOnly
              />
            </div>

            {/* User Name (Read Only) */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">User Name</span>
              </label>
              <input
                name="username"
                type="text"
                className="input input-bordered"
                value={user?.displayName || "Anonymous User"}
                readOnly
              />
            </div>

            {/* Submit Button */}
            <div className="form-control md:col-span-2">
              <button
                type="submit"
                className="btn bg-[#1ed61e] text-amber-50 w-full"
              >
                Update Task
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default UpdateTask;
