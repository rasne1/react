const TrendItem = ({ movie }) => {
  return (
    <li>
      <img src={movie.poster} />
      <div>{movie.name}</div>
      <div>{movie.openDate}</div>
    </li>
  );
};
export default TrendItem;
