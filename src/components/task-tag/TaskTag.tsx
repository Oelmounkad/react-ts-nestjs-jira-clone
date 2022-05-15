import "./TaskTag.css";
import { TaskTag } from "../../interfaces/task.model";

const TaskTagComponent = (props: { taskTag: TaskTag }) => {
  return (
    <div
      className="task-tag"
      style={{
        backgroundColor: `${props.taskTag.tagBackgroundColor}`,
        color: `${props.taskTag.tagColor}`,
      }}
    >
      {props.taskTag.tagName}
    </div>
  );
};

export default TaskTagComponent;
