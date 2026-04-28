import TheaterItem from "./TheaterItem";

const TheaterList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <TheaterItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
export default TheaterList;
