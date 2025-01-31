import React from "react";

interface WorkoutRowProps {
  workout: { date: string; distance: number };
  onDelete: (date: string) => void;
}

const WorkoutRow: React.FC<WorkoutRowProps> = ({ workout, onDelete }) => {
  const handleDelete = () => {
    onDelete(workout.date);
  };

  return (
    <tr>
      <td>{workout.date}</td>
      <td>{workout.distance.toFixed(1)}</td>
      <td>
        <button onClick={handleDelete}>✘</button>
      </td>
    </tr>
  );
};

export default WorkoutRow;
