'use client'
import {
   BrowserRouter as Router, Route, Routes
} from "react-router-dom"
import { Home } from "./pages/Home"

export function AppRouters() {
   return (
      <Router>
         <Routes>
            <Route path="/catalogo" element={<Home />} />
         </Routes>
      </Router>
   )
}