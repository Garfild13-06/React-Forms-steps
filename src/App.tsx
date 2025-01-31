import React, { useState } from "react";
import "./APP.css";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutTable from "./components/WorkoutTable";

interface Workout {
  date: string;
  distance: number;
}

const App: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([
    { date: "2019-07-22", distance: 5.3 },
    { date: "2019-07-20", distance: 5.7 },
    { date: "2019-07-18", distance: 6.1 },
  ]);

  // Добавление или обновление записи
  const addOrUpdateWorkout = (newDate: string, newDistance: number) => {
    const existingIndex = workouts.findIndex((w) => w.date === newDate);

    if (existingIndex !== -1) {
      // Обновляем существующую запись
      const updatedWorkouts = [...workouts];
      updatedWorkouts[existingIndex].distance += newDistance;
      setWorkouts(sortWorkouts(updatedWorkouts));
    } else {
      // Добавляем новую запись
      const newWorkout = { date: newDate, distance: newDistance };
      setWorkouts(sortWorkouts([...workouts, newWorkout]));
    }
  };

  // Удаление записи
  const deleteWorkout = (date: string) => {
    const updatedWorkouts = workouts.filter((w) => w.date !== date);
    setWorkouts(updatedWorkouts);
  };

  // Сортировка записей по дате
  const sortWorkouts = (data: Workout[]): Workout[] => {
    return data.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  };

  return (
    <div className="app">
      <h1>Учёт тренировок</h1>
      <WorkoutForm onAddWorkout={addOrUpdateWorkout} />
      <WorkoutTable workouts={workouts} onDelete={deleteWorkout} />
    </div>
  );
};

export default App;
