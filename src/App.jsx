import { Provider } from "react-redux";
import CardList from "./components/CardList";
import TimeFilter from "./components/TimeFilter";
import Title from "./components/Title";
import appStore from "./redux/appStore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <div className="w-[80%] mx-auto mt-20">
          <TimeFilter />
          <Title />
          <CardList />
        </div>
      </Provider>
    </div>
  );
}

export default App;
