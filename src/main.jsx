import React from 'react';
import ReactDOM from 'react-dom/client';
import TodosApp from './TodosApp.jsx';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodosApp />
  </React.StrictMode>,
);
