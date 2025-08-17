import { useState } from "react";

function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (newText.trim() === "") return;
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
          {todo.text}
        </span>
      )}

      <div className="btn-group">
        {isEditing ? (
          <button onClick={handleSave} className="save-btn">
            Save
          </button>
        ) : (
          <>
            <button
              onClick={() => toggleComplete(todo.id)}
              className={todo.completed ? "undo-btn" : "done-btn"}
            >
              {todo.completed ? "Undo" : "Done"}
            </button>
            <button
              onClick={() => setIsEditing(true)}
              className="edit-btn"
            >
              Edit
            </button>
          </>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="delete-btn"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
export default ToDoItem;

