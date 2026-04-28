import { useState } from "react";
import TrendHeader from "./TrendHeader";
import TrendItem from "./TrendItem";
import TrendList from "./TrendList";
import TrendSelector from "./TrendSelector";
import trendData from "./trend.json";
import TrendBox from "./TrendBox";
const TrendMain = () => {
  const { sectionName, selectorsKR, items } = trendData;
  const [day, setDay] = useState("today");
  return (
    <div>
      <TrendBox>
        <TrendHeader>
          {sectionName}
          <TrendSelector trendView={selectorsKR} setDay={setDay} />
        </TrendHeader>
        <TrendList movies={items[day]} />
      </TrendBox>
    </div>
  );
};
export default TrendMain;
