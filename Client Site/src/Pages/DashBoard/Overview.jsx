import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Link } from "react-router";

const Overview = () => {
  const [bids, setBids] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [alltasks, setAllTasks] = useState([]);
  const [bidtasks, setBidTasks] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/freelancers/${user.email}`)
      .then((res) => res.json())
      .then((data) => setBids(data));

    fetch(`http://localhost:3000/addtask`)
      .then((res) => res.json())
      .then((data) => setAllTasks(data));

    fetch(`http://localhost:3000/mytasks/${user.email}`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [user]);
    
    console.log(bids)

  useEffect(() => {
    if (bids[0]?.Bidtasks && alltasks.length > 0) {
      const filtered = bids[0].Bidtasks.flatMap(
        (t) => alltasks.filter((task) => task._id === t) // or task.id === t, depending on your schema
      );
      setBidTasks(filtered);
    }
  }, [bids, alltasks]);
    
    // console.log(bidtasks);

  const statsData = tasks.map((task) => ({
    name: task.title,
    bids: task.Bid || 0,
  }));

  return (
    <div className="p-4">
      {/* Bar Chart */}
      <div className="bg-base-200 p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">
          Your Posted Tasks Summary
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={statsData}>
            <XAxis
              dataKey="name"
              tickFormatter={(name) =>
                name.length > 12 ? name.slice(0, 12) + "..." : name
              }
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="bids" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>

          <h1 className="text-2xl text-base-content font-semibold my-4">
              Your Bid Tasks Summary
          </h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bidtasks.map((task) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>
                <Link to={`/addtask/${task._id}`}>
                  <button className="btn btn-sm btn-outline">
                    View Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Overview;
