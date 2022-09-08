import { Routes, Route  } from "react-router-dom"
import { List } from "./AddForm/AddForm"

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/create-food" element={<List />} />
          
      </Routes>
    </div>
  );
}

export default App;
