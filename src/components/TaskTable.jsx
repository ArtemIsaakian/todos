import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskRows from './TaskRows.jsx';
import TitleTaskTable from './TitleTaskTable.jsx';

function TaskTable({ url }) {
  // const [data, setData] = useState('');
  // useEffect(() => {
  //   axios.get(`${url}/tasks`).then((response) => {
  //     setData(response.data);
  //   });
  // }, []);

  return (
    <div className="taskTable">
      <TitleTaskTable />
      <TaskRows />
    </div>
  );
}

export default TaskTable;
