import React from "react";
import "./Todo.css";

function ShowTodo(props) {
  return (
    <div className="container">
      <div className="row my-2" style={{ marginRight: "4rem" }}>
        <div className="col-6">
          <h6>{props.task}</h6>
        </div>
        <div className="col-6">
          <button
            className="btn"
            onClick={() => {
              props.onSelcet(props.id);
            }}
          >
            Delete
          </button>
          <button
            className="btn"
            onClick={() => {
              props.onEdit(props.id);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowTodo;
