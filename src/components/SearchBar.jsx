import { useState, useEffect } from 'react';
import axios from 'axios';

function SearchBar({ url }) {
  const [newTask, setNewTask] = useState(''); // новая задача
  const [data, setData] = useState(''); // полученные данные из БД
  const [tasksList, setTaskskList] = useState(''); // список задач

  useEffect(() => {
    axios.get(`${url}/tasks`).then((response) => {
      setData(response.data);
    });
  }, []);

  function sendData() {
    axios
      .post(`${url}/tasks`, {
        task: newTask,
      })
      .then((response) => {
        setTaskskList([...data, response.data]);
      });
  }

  console.log(tasksList);

  return (
    <div className="searchBar">
      <input
        type="text"
        name="taskField"
        className="taskInput"
        placeholder="task..."
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={sendData}>Add task</button>
      {/* <ul>{tasksList && tasksList.map((val) => <li key={val.id}>{val.task}</li>)}</ul> */}
    </div>
  );
}

export default SearchBar;
