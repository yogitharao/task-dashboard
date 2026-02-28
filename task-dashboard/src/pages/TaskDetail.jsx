import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react';
import axios from "axios";

function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      setTask(res.data);
    };

    fetchTask();
  }, [id]);

  if (!task) return <p className="p-6">Loading task...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Task Detail</h2>
      <p><strong>ID:</strong> {task.id}</p>
      <p><strong>Title:</strong> {task.title}</p>
      <p>
        <strong>Status:</strong>{" "}
        {task.completed ? "Completed ✅" : "Pending ❌"}
      </p>

      <Link to="/tasks" className="text-blue-600 underline mt-4 inline-block">
        Back to Tasks
      </Link>
    </div>
  );
}

export default TaskDetail;