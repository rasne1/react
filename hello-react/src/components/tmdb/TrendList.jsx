import TrendItem from "./TrendItem";

const TrendList = ({ movies }) => {
  return (
    <div className="movie-List">
      {movies.map((movie) => (
        <TrendItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
export default TrendList;
