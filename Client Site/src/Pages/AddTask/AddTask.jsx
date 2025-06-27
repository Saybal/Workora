import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddTask = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Add Tasks | Workora";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const TaskData = Object.fromEntries(formData.entries());
    console.log(TaskData);

    fetch("http://localhost:3000/addtask", {
      method: "POST",
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
    <div className="bg-base-200 p-6 min-h-screen">
      <div className="max-w-4xl mx-auto bg-base-300 p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add a New Task for Your Expert
        </h2>
        <form
          onSubmit={handleSubmit}
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
              placeholder="Enter task title"
              className="input input-bordered"
              required
            />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label block">
              <span className="label-text font-semibold">Category</span>
            </label>
            <select name="category" className="select select-bordered" required>
              <option disabled value="">
                Select a category
              </option>
              <option>Web Development</option>
              <option>Software Development</option>
              <option>SEO</option>
              <option>Design</option>
              <option>Video Editing</option>
              <option>Writing</option>
              <option>Book Design</option>
              <option>Marketing</option>
              <option>Architecture & Interior Design</option>
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
              placeholder="What needs to be done?"
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
              placeholder="Brief summary of the task"
              required
            ></textarea>
          </div>

          {/* Deadline */}
          <div className="form-control">
            <label className="label block">
              <span className="label-text font-semibold">Deadline</span>
            </label>
            <input
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
              placeholder="e.g., 500"
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
              placeholder="e.g., Remote / India / USA"
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

          {/* Initial Bid */}
          <div className="form-control">
            <label className="label block">
              <span className="label-text font-semibold">Initial Bid</span>
            </label>
            <input
              name="initalBid"
              type="text"
              className="input input-bordered"
              value={0}
              readOnly
            />
          </div>

          {/* Submit Button */}
          <div className="form-control md:col-span-2">
            <button
              type="submit"
              className="btn bg-[#1ed61e] text-amber-50 w-full"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
