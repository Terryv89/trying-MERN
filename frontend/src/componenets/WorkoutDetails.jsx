const WorkoutDetails = ({ workout }) => {
  return (
    <div className="workout-details">
      <h4>Exercise: {workout.title}</h4>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>
        <strong>Load (kg): </strong> {workout.load}
      </p>
      <p>
        <strong>Created at: </strong>
        {workout.createdAt}
      </p>
    </div>
  );
};

export default WorkoutDetails;
