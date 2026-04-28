import { useContext } from "react";
import TmdbContext from "./contexts/TmdbContext";

const TrendHeader = ({ children }) => {
  const { componentName } = useContext(TmdbContext);
  if (!componentName || componentName !== "TrendBox") {
    return <></>;
  }
  return (
    <div>
      <h1>트렌드였나</h1>
      {children}
    </div>
  );
};
export default TrendHeader;
