import {
   BrowserRouter as Router, Route, Routes
} from "react-router-dom"
import { Plans } from "./pages/Plans"
import { Home } from "./pages/Home"

export function AppRouters() {
   return (
      <Router>
         <Routes>
            <Route path="/card" element={<Plans />} />
            <Route path="/catalogo" element={<Home />} />
         </Routes>
      </Router>
   )
}