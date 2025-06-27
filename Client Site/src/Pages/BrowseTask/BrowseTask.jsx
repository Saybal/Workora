import React, { useEffect, useState } from "react";
import TaskCard from "../AddTask/TaskCard";
import Swal from "sweetalert2";
import SearchBar from "./Search Bar/SearchBar";
import SuggestionList from "./Search Bar/SuggestionList";

const BrowseTask = () => {
  const [taskdata, setTaskData] = useState([]);
  const [suggestion, setSuggestion] = useState([]);
  const [input, setInput] = useState("");
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
        <div className="my-7">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl my-8 sm:my-10 md:my-12 text-center font-semibold leading-tight">
              <span className="bg-[linear-gradient(to_right,_#6366f1_10%,_#0ea5e9_30%,_#10b981_90%)] bg-clip-text text-transparent">
                Browse
              </span>{" "}
              Your Tasks, <br className="hidden sm:block" />
              Turn Skills Into{" "}
              <span className="bg-[linear-gradient(to_right,_#6366f1_10%,_#0ea5e9_30%,_#10b981_90%)] bg-clip-text text-transparent">
                Paychecks
              </span>
            </h1>

            <div className="relative w-full max-w-md mx-auto">
              <div className="my-5">
                <SearchBar
                  input={input}
                  setInput={setInput}
                  setSuggestion={setSuggestion}
                  setTaskData={setTaskData}
                />
              </div>
              <div>
                <SuggestionList
                  input={input}
                  suggestion={suggestion}
                  taskdata={taskdata}
                  setTaskData={setTaskData}
                />
              </div>
            </div>
          </div>
          {taskdata.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseTask;
