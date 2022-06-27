import "./App.css";
import Header from "./Components/Header";
import SwipeButtons from "./Components/SwipeButtons";
import Tindercards from "./Components/Tindercards";

function App() {
  return (
    <div className="App">
      <Header />
      <Tindercards />
      <SwipeButtons />
    </div>
  );
}

export default App;
