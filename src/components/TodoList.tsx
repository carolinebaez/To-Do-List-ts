// import React from 'react';


// interface TodoListProps {
//   todos: string[];
//   removeTodo: (index: number) => void;
// }

// const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
//   return (
//     <ul>
//       {todos.map((todo, index) => (
//         <li key={index}>
//           <span className="truncate" title={todo}>{todo}</span> 
//           <button onClick={() => removeTodo(index)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList; 


import React from 'react';
import Tooltip from './Tooltip'; // Importa el Tooltip personalizado

interface TodoListProps {
  todos: string[];
  removeTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <Tooltip text={todo} tooltipText={todo} /> {/* Usa el Tooltip */}
          <button onClick={() => removeTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;



