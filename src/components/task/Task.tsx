import "./Task.css";
import { Task } from "../../interfaces/task.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import TaskTagComponent from "../task-tag/TaskTag";

export const TaskComponent = (props: { task: Task }) => {
  return (
    <div className="task-wrapper">
      <div className="task-name-wrapper">
        <FontAwesomeIcon icon={faBullseye}></FontAwesomeIcon>
        <div className="task-name">{props.task.taskName}</div>
      </div>
      <div className="task-tags-wrapper">
        {props.task.tags?.map((taskTag) => (
          <TaskTagComponent taskTag={taskTag} />
        ))}
      </div>
    </div>
  );
};
