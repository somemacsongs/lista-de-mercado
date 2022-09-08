import { Routes, Route  } from "react-router-dom"
import { List } from "./AddForm/AddForm"
import Home from "./Home"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/create-food" element={<List />} />
        <Route path="/" element={<Home />}  />
      </Routes>
    </div>
  );
}

export default App;
