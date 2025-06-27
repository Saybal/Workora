import React, { useState } from 'react';
import { ImSearch } from "react-icons/im";
import { FaTimesCircle } from "react-icons/fa";

const SearchBar = ({ input, setInput, setSuggestion, setTaskData }) => {
    const [timer, setTimer] = useState(null);

    const searchData = (value) => {
        fetch("http://localhost:3000/addtask")
            .then(res => res.json())
            .then(data => {
                const result = data.filter(task =>
                    value &&
                    task?.category?.toLowerCase().includes(value.toLowerCase())
                );

                const uniquecategory = new Map();
                result.forEach(task => {
                    const category = task?.category?.toLowerCase();
                    if (category && !uniquecategory.has(category)) {
                        uniquecategory.set(category, task);
                    }
                });

                const suggestions = Array.from(uniquecategory.values());
                setSuggestion(suggestions);
            });
    };

    const handleInput = (value) => {
        setInput(value);
        clearTimeout(timer);
        const newTimer = setTimeout(() => {
            searchData(value);
        }, 300);
        setTimer(newTimer);
    };

    const clearInput = () => {
        setInput("");
        fetch("http://localhost:3000/addtask")
            .then(res => res.json())
            .then(data => {
                setTaskData(data);
            })
            .catch(err => console.error("Error fetching tasks:", err));
        setSuggestion([]);
    };

    return (
        <div className="w-full max-w-xl mx-auto mt-4 px-4 sm:px-6">
            <div className="flex items-center h-10 sm:h-12 md:h-14 px-3 sm:px-4 rounded-xl border border-base-content bg-white/20 backdrop-blur-sm shadow-md transition-all duration-300">
                <ImSearch className="text-base-content text-lg sm:text-xl mr-2 sm:mr-3" />
                <input
                    className="flex-grow bg-transparent outline-none text-base-content text-sm sm:text-base placeholder-base-content/70 caret-base-content"
                    type="text"
                    value={input}
                    onChange={(e) => handleInput(e.target.value)}
                    placeholder="Search by category..."
                />
                {input && (
                    <FaTimesCircle
                        onClick={clearInput}
                        className="text-base-content/60 hover:text-base-content cursor-pointer text-lg sm:text-xl transition duration-150"
                    />
                )}
            </div>
        </div>
    );
};

export default SearchBar;
