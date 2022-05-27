import{
   BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { Card } from "./pages/Card"
import { Catalogo } from "./pages/Catalogo"

export function AppRouters(){
   return(
      <Router>
         <Routes>
         <Route path="/card" element={<Card/>}/>
         <Route path="/catalogo" element={<Catalogo/>}/>
      </Routes>
      </Router>
   )
}