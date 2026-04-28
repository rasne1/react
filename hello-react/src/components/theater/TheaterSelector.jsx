const TheaterSelector = ({ select, setShow }) => {
  console.log("setShow:", setShow);
  const [ing, end] = select;
  const onShowChangeHandler = (event) => {
    setShow(event.target.value);
  };

  return (
    <select onChange={onShowChangeHandler}>
      <option value="today">{ing}</option>
      <option value="week">{end}</option>
    </select>
  );
};
export default TheaterSelector;
