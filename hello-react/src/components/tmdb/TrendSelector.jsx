import TmdbContext from "./contexts/TmdbContext";

const TrendSelector = ({ trendView, setDay }) => {
  const [today, week] = trendView;

  const onTodayClick = () => setDay("today");
  const onWeekClick = () => setDay("week");

  return (
    <>
      <button type="button" value={today} onClick={onTodayClick}>
        오늘
      </button>
      <button type="button" value={week} onClick={onWeekClick}>
        이번주
      </button>
    </>
  );
};
export default TrendSelector;
