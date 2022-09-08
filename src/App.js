import { Routes, Route  } from "react-router-dom"
import List  from "./Pages/AddForm/AddForm"
import Home from "./Pages/Home"
import FoodPage from "./Pages/FoodPage/FoodPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/create-food" element={<List />} />
        <Route path="/" element={<Home />}  />
        <Route path="/:id" element={<FoodPage />} />
      </Routes>
    </div>
  );
}

export default App;
