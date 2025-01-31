import React, { useState } from "react";

interface WorkoutFormProps {
  onAddWorkout: (date: string, distance: number) => void;
  initialData?: { date: string; distance: number } | null;
}

const WorkoutForm: React.FC<WorkoutFormProps> = ({
  onAddWorkout,
  initialData,
}) => {
  const [date, setDate] = useState<string>(initialData?.date || "");
  const [distance, setDistance] = useState<number>(initialData?.distance || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || distance <= 0) return;

    onAddWorkout(date, distance);
    setDate("");
    setDistance(0);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="number"
        step="0.1"
        placeholder="Километры"
        value={distance}
        onChange={(e) => setDistance(parseFloat(e.target.value))}
        required
      />
      <button type="submit">{initialData ? "Сохранить" : "Добавить"}</button>
    </form>
  );
};

export default WorkoutForm;
