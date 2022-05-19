import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BuscarPersonagem } from "./Pages/BuscarPersonagem";

export const AppRoute = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<BuscarPersonagem/>}/>
      </Routes>
    </Router>
  )
}