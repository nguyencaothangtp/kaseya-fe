import axios from 'axios';

export default axios.create({
  // TODO: update this with the Task's api (symfony). This should be Base api
  baseURL: 'https://task-symfony-api.local',
})
