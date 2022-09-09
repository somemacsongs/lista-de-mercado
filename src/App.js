import { Routes, Route  } from "react-router-dom"
import List  from "./Pages/AddForm/AddForm"
import Home from "./Pages/Home"
import FoodPage from "./Pages/FoodPage/FoodPage"
import EditPage from "./Pages/EditPage/EditPage"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/create-food" element={<List />} />
        <Route path="/" element={<Home />}  />
        <Route path="/:id" element={<FoodPage />} />
        <Route path="/:id/edit" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
