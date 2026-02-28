import { Link } from "react-router-dom";

function TaskCard({ task }) {
  return (
    <div
      className={`p-4 rounded shadow ${
        task.completed ? "bg-green-100" : "bg-red-100"
      }`}
    >
      <h3 className="font-semibold">{task.title}</h3>
      <p>
        Status: {task.completed ? "Completed ✅" : "Pending ❌"}
      </p>

      <Link
        to={`/tasks/${task.id}`}
        className="text-blue-600 underline mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
}

export default TaskCard;