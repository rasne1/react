const TrendSelector = ({ trendView, setDay }) => {
  const [today, week] = trendView;

  const onTodayClick = () => {
    setDay(today);
  };
  const onWeekClick = () => {
    setDay(week);
  };

  return (
    <div>
      <button type="button" value={today} onClick={onTodayClick}>
        오늘
      </button>
      <button type="button" value={week} onClick={onWeekClick}>
        이번주
      </button>
    </div>
  );
};
export default TrendSelector;
