import React, { useEffect } from 'react';
import { Link } from 'react-router';

const SuggestionDesign = ({ Name, setTaskData, input }) => {
    

    useEffect(() => {
        if (!input) {
            fetch("http://localhost:3000/addtask")
                .then(res => res.json())
                .then(data => {
                    setTaskData(data);
                })
                .catch(err => console.error("Error fetching tasks:", err));
        }
    }, [input]);

    
    const handleFilter = () => {

        if (input)
        {
            fetch("http://localhost:3000/addtask")
            .then(res => res.json())
            .then(data => {
                const result = data.filter(task =>
                    task?.category?.toLowerCase().includes(Name.toLowerCase())
                );
                setTaskData(result);
                
                console.log(result);
            });
        }
        else
        {
            fetch("http://localhost:3000/addtask")
            .then(res => res.json())
            .then(data => {
                setTaskData(data);
            });
        }
        
    }
    return (
        <div className='px-3 py-2 text-base-content hover:font-semibold hover:cursor-pointer hover:bg-white/40'>
            <div onClick={handleFilter}>
                {Name}
            </div>
        </div>
    );
};

export default SuggestionDesign;