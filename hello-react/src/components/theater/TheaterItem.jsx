const TheaterItem = ({ movie }) => {
  return (
    <li className="movie">
      <img src={movie.poster} />
      <div>{movie.name}</div>
      <div>{movie.openDate}</div>
    </li>
  );
};
export default TheaterItem;
