import React, { useState } from "react";
import ShowTodo from "./ShowTodo";
import "./Todo.css";

function Todo() {
  const [task, setTask] = useState("add some task");
  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      return; // If task is empty, do nothing
    }
    const newData = task;
    setData([...data, newData]);

    setTask("");
  };

  const deleteItem = (a) => {
    const finalData = data.filter((curEle, index) => {
      return index !== a;
    });
    setData(finalData);
  };

  const editItem = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setTask(data[index]);
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center main-row">
        <div className="col shadow main-col bg-white">
          <div className="row bg-primary text-white">
            <div className="col  p-2">
              <h4 className="text-center">Todo App Using React JS</h4>
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <div className="row justify-content-between text-white p-2">
              <div className="form-group flex-fill mb-2 col-9">
                <input
                  id="todo-input"
                  type="text"
                  className="form-control"
                  value={task}
                  onChange={onChangeHandler}
                />
              </div>
              <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">
                Add Todo
              </button>
            </div>
          </form>

          {data.map((value, index) => {
            return (
              <ShowTodo
                key={index}
                id={index}
                task={value}
                onSelcet={deleteItem}
                onEdit={editItem}
                editMode={editMode}
                editIndex={editIndex}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
