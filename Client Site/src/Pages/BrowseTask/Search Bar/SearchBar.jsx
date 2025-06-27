import React, { useState } from 'react';
import { ImSearch } from "react-icons/im";
import { FaTimesCircle } from "react-icons/fa";

const SearchBar = ({input, setInput, setSuggestion ,setTaskData }) => {
    
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
                    const category = task?.category?.toLowerCase()

                    if (category && !uniquecategory.has(category))
                    {
                        uniquecategory.set(category, task);
                    }
                });
                
                const suggestions = Array.from(uniquecategory.values());
                setSuggestion(suggestions);
                
                console.log(result);
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
        <div className="border-1 border-base-content rounded-xl mt-4 h-[2.5rem] flex items-center px-3 backdrop-blur-sm shadow-md">
            <ImSearch className="text-base-content text-lg mr-2" />
            <input
                className="flex-grow bg-transparent outline-none text-base-content placeholder-base-content/70 caret-base-content"
                type="text"
                value={input}
                onChange={(e) => handleInput(e.target.value)}
                placeholder="Search by category..."
            />
            {input && (
                <FaTimesCircle
                    onClick={clearInput}
                    className="text-base-content/60 hover:text-base-content cursor-pointer text-lg transition duration-150"
                />
            )}
        </div>
    );
};

export default SearchBar;
