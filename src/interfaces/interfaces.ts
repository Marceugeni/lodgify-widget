export interface TaskCategories {
    name: string;
    tasks: Task[];
  }
  
interface Task {
    description: string;
    value: number;
    checked: boolean;
  }