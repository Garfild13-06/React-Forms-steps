import React from "react";
import WorkoutRow from "./WorkoutRow";

interface WorkoutTableProps {
  workouts: { date: string; distance: number }[];
  onDelete: (date: string) => void;
}

const WorkoutTable: React.FC<WorkoutTableProps> = ({ workouts, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Километры</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {workouts.map((workout) => (
          <WorkoutRow
            key={workout.date}
            workout={workout}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default WorkoutTable;
