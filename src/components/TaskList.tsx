import React from 'react';
import { Item } from "../services/task-service";

interface Props {
  items: Item[];
}
const TaskList = ({items}: Props) => {
  // TODO if have more time:
  // + use useEffect hook to get data from the server rather than using the dummy items data
  // + add an isLoading (true/false) feature (spinner to improve UX)
  // + make use of taskService (which will use apiClient to make http request to Symfony backend

  return (
    <table className="table table-bordered">
      <thead>
      <tr>
        <th scope="col">Description</th>
        <th scope="col">Title</th>
        <th scope="col">Priority</th>
        <th scope="col">Done</th>
      </tr>
      </thead>
      <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <td>{item.description}</td>
          <td>{item.title}</td>
          <td>{item.priority}</td>
          <td>{item.isCompleted ? 'Yes': 'No'}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default TaskList;