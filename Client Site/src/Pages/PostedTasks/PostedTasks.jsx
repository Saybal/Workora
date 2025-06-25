import React, { useContext } from 'react';
import TaskTable from '../AddTask/TaskTable';
// import { useParams } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PostedTasks = () => {
    const { user } = useContext(AuthContext);
    const name = user?.displayName;
    console.log(user);
    return (
        <div>
            <TaskTable name={name} />
        </div>
    );
};

export default PostedTasks;