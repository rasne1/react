import ArticleMain from "./components/articles/articleMain.jsx";
import Calc from "./components/counter/Calc.jsx";
import Counter from "./components/counter/Counter.jsx";
import TheaterMain from "./components/theater/theaterMain.jsx";
import TrendBox from "./components/tmdb/TrendBox.jsx";
import TrendMain from "./components/tmdb/trendMain.jsx";
import TodoMain from "./components/todo/TodoMain.jsx";
import { ReactReduxProvider } from "./stores/redux/ReactReduxProvider.jsx";
import { ToolkitProvider } from "./stores/toolkit/ToolkitProvider.jsx";

export default function App() {
  return (
    <ToolkitProvider>
      <TodoMain />
    </ToolkitProvider>
  );
}

//export default App;
