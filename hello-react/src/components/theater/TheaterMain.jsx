import { useState } from "react";
import TheaterBox from "./TheaterBox";
import TheaterHeader from "./TheaterHeader";
import TheaterItem from "./TheaterItem";
import TheaterList from "./TheaterList";
import TheaterSelector from "./TheaterSelector";
import MovieList from "./trend.json";

const TheaterMain = () => {
  const { sectionName, selectorsKR, items } = MovieList;
  const [show, setShow2] = useState("today");
  return (
    <div>
      <TheaterBox>
        <TheaterHeader>
          {sectionName}
          <TheaterSelector select={selectorsKR} setShow={setShow2} />
        </TheaterHeader>
        <TheaterList movies={items[show]} />
      </TheaterBox>
    </div>
  );
};
export default TheaterMain;
