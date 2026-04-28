import TrendItem from "./TrendItem";

const TrendList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => {
        <TrendItem key={movies.id} movie={movie} />;
      })}
    </>
  );
};
export default TrendList;
