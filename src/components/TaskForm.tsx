import React from 'react';
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface Props {
  onFormSubmit: (data: any) => void;
}

type FormData = z.infer<typeof schema>;

// TODO be improved: we could add validation schema here for Task
const schema = z.object({
  title: z.string(),
  description: z.string(),
  priority: z.number(),
  isCompleted: z.string()
});

const TaskForm = ({ onFormSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    onFormSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          id="title"
          type="text"
          className="form-control"
          {...register("title")}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description"
          type="text"
          className="form-control"
          {...register("description")}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="priority" className="form-label">
          Priority
        </label>
        <input
          id="priority"
          type="number"
          className="form-control"
          {...register("priority", {
            valueAsNumber: true
          })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="isCompleted" className="form-label">
          Done
        </label>
        <select
          className="form-select"
          id="isCompleted"
          {...register("isCompleted")}
        >
          <option></option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
      <button className="mb-3 btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default TaskForm;