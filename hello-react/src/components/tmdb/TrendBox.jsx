import TmdbContext from "./contexts/TmdbContext";

const TrendBox = ({ children }) => {
  const providerProps = {
    componentName: "TrendBox",
  };
  return (
    <div className="tasks">
      <TmdbContext.Provider value={providerProps}>
        {children}
      </TmdbContext.Provider>
    </div>
  );
};

export default TrendBox;
