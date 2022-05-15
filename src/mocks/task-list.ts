import { TaskStatus } from "../interfaces/task-status.enum";
import { Task } from "../interfaces/task.model";

export const TaskList : Task[] = [
    {
        taskName: 'Contact client for leads',
        status: TaskStatus.DONE,
        tags: [
            {
                tagName: 'Medium',
                tagBackgroundColor: '#FF5722',
                tagColor: 'black'
            },
            {
                tagName: 'At Risk',
                tagBackgroundColor: '#FFEB3B',
                tagColor: 'black'
            }
        ]
    },
    {
        taskName: 'Contact client for goals',
        status: TaskStatus.DONE
    },
    {
        taskName: 'Determine project goal',
        status: TaskStatus.TODO,
        tags: [
            {
                tagName: 'Low',
                tagBackgroundColor: '#03A9F4',
                tagColor: 'black'
            },
            {
                tagName: 'On Track',
                tagBackgroundColor: '#00BCD4',
                tagColor: 'black'
            }
        ]
        
    },
    {
        taskName: 'Hold introductory meeting',
        status: TaskStatus.DOING,
        tags: [
            {
                tagName: 'High',
                tagBackgroundColor: '#9C27B0',
                tagColor: 'white'
            },
            {
                tagName: 'Off Track',
                tagBackgroundColor: '#FF4081',
                tagColor: 'white'
            }
        ]
    },
    {
        taskName: 'Hold a meeting whith the manager',
        status: TaskStatus.TODO,
        tags: [
            {
                tagName: 'Off Track',
                tagBackgroundColor: '#FF4081',
                tagColor: 'white'
            }
        ]
    },
] as Task[];