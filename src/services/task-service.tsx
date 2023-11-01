import create from "./http-service";

export interface Item {
  id: number;
  title: string;
  description: string;
  priority: number;
  isCompleted: boolean;
}

export default create('/tasks');