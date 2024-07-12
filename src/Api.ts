import axios from 'axios';
import env from './environments';

const api = axios.create({
  baseURL: env.baseURLApi,
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzIwNzU3NzQ4LCJleHAiOjE3MjA3NjEzNDgsIm5iZiI6MTcyMDc1Nzc0OCwianRpIjoiRUJIMnlBOHc1TUlmZzJoZCIsInN1YiI6IjMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.zTYQnowtctfzibTtvdfEAQkjhZZfRRBHMWtDmY6o68o`,
  },
});

export default api;
