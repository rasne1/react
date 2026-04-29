import { useContext } from "react";
import TmdbContext from "./contexts/TmdbContext";

const TrendHeader = ({ children }) => {
  return (
    <div>
      <h1>트렌드였나</h1>
      {children}
    </div>
  );
};
export default TrendHeader;
