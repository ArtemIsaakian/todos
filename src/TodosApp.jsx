import { React } from 'react';
import SearchBar from './components/SearchBar.jsx';
import TaskTable from './components/TaskTable.jsx';

function TodosApp() {
  const url = 'https://638bb9f97220b45d2295bafd.mockapi.io';

  return (
    <div className="todosApp">
      <SearchBar url={url} />
      <TaskTable url={url} />
    </div>
  );
}

export default TodosApp;
