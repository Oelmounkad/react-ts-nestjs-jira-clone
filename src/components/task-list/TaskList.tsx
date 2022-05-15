import "./TaskList.css";
import { TaskStatus } from "../../interfaces/task-status.enum";
import { Task } from "../../interfaces/task.model";
import { TaskComponent } from "../task/Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

export const TaskListComponent = (props: {
  taskList: Task[];
  taskStatus: TaskStatus;
}) => {
  return (
    <div className="task-list">
      <div className="task-list-state">
          <div className="task-list-state-name">
              {props.taskStatus}
          </div>
          <div className="task-list-state-options">
            <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
          </div>
      </div>
      <div className="task-list-wrapper">
        {props.taskList.map((task) => (
        <TaskComponent task={task} />
      ))}
      </div>
      <div className="add-task-wrapper">
        <div className="add-task-flex">
        <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
        <div className="add-task">Add Task</div> 
        </div>
      </div>
      
    </div>
  );
};
