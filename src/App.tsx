import "./App.css";
import { TaskListComponent } from "./components/task-list/TaskList";
import { TaskStatus } from "./interfaces/task-status.enum";
import { TaskList } from "./mocks/task-list";

function App() {
  return (
    <div className="task-states-wrapper">
      <TaskListComponent
        taskList={TaskList.filter((task) => task.status === TaskStatus.TODO)}
        taskStatus={TaskStatus.TODO}
      />
      <TaskListComponent
        taskList={TaskList.filter((task) => task.status === TaskStatus.DOING)}
        taskStatus={TaskStatus.DOING}
      />
      <TaskListComponent
        taskList={TaskList.filter((task) => task.status === TaskStatus.DONE)}
        taskStatus={TaskStatus.DONE}
      />
    </div>
  );
}

export default App;
