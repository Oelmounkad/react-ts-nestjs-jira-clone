import { TaskStatus } from "./task-status.enum";

export interface Task {
    taskName: string;
    status: TaskStatus;
    tags: TaskTag[];
}

export interface TaskTag {
    tagName: string;
    tagBackgroundColor:string;
    tagColor: string;
}