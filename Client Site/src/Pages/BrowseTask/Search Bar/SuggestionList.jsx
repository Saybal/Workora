import React from 'react';
import SuggestionDesign from './SuggestionDesign';

const SuggestionList = ({ input, suggestion , setTaskData }) => {
    if (input && !suggestion?.length) return (
        <div className='text-center border-1 border-base-content p-4 shadow-md rounded-xl mt-1 max-h-40 overflow-y-auto transition-all duration-300 ease-in-out scrollbar-hide'><p>No Result found</p></div>
    );

    return (
        <div className= {`${!input? "hidden" : "block text-left border-1 border-base-content shadow-md rounded-xl mt-2 max-h-40 overflow-y-auto transition-all duration-300 ease-in-out scrollbar-hide"}`}>
            {suggestion.map((sug) => (
                <SuggestionDesign key={sug._id} Name={sug.category} setTaskData={setTaskData} input={input} />
            ))}
        </div>
    );
};

export default SuggestionList;
