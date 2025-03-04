import React, { Component } from "react";

import TaskLi from "./Task";
import Form from "./Form";

import "./main.css";

export default class Main extends Component {
  state = {
    newTask: "",
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const localTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.setState({
      tasks: localTasks,
    });
  }

  componentDidUpdate(prev) {
    const { tasks } = this.state;
    if (tasks === prev.tarefas) return;

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Handle
  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, newTask, index } = this.state;

    const trimmedTask = newTask.trim();
    if (trimmedTask === "" || tasks.includes(trimmedTask)) return;

    const newTasks = [...tasks];

    if (index !== -1) {
      newTasks[index] = trimmedTask;
      this.setState({
        tasks: newTasks,
        newTask: "",
        index: -1,
      });
    } else {
      this.setState({
        tasks: [...newTasks, trimmedTask],
        newTask: "",
      });
    }
  };

  handleDelete = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((_, i) => i !== id),
    });
  };

  handleEdit = (i) => {
    const { tasks } = this.state;
    this.setState({
      newTask: tasks[i],
      index: i,
    });
  };

  render() {
    const { tasks, newTask } = this.state;

    return (
      <div className="main">
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
        />

        <div className="task-list">
          <ul>
            {tasks.map((task, i) => (
              <TaskLi
                txt={task}
                key={i}
                id={i}
                onDelete={this.handleDelete}
                onEdit={this.handleEdit}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
